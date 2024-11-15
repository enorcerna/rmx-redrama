import {listCountriesByPlatformsTypes} from "~/types/country";
import type {ItemNav} from "./../types/nav.d";
import type {listLabelsTypes} from "~/types/label";
import {
  DetailDoramaType,
  DoramaType,
  PaginationDoramaTypes,
  SimilarDoramasType
} from "~/types/dorama";
import {DataDoramas, DataEpisodes, DataSearch} from "~/types/doram";
import {DetailEpisodeType, LinksOnline} from "~/types/episode";
import {GenreType} from "~/types/genre";
class ApiClient {
  private url_client: string;
  constructor() {
    this.url_client = import.meta.env.DEV
      ? "http://localhost:9011/"
      : import.meta.env.VITE_API_URL;
  }
  private async ResquestData(path: string) {
    try {
      const resp = await fetch(`${this.url_client}${path}`);
      return await resp.json();
    } catch (error) {
      throw new Error("Failded fetch:" + error);
    }
  }
  async getLabels(): Promise<ItemNav[]> {
    const {listLabels} = (await this.ResquestData("labels")) as listLabelsTypes;
    return listLabels?.map(({name, slug}) => ({
      title: name,
      url: `/tema/${slug}`
    }));
  }
  async getCountries(): Promise<ItemNav[]> {
    const {listCountriesByPlatforms} = (await this.ResquestData(
      "countries"
    )) as listCountriesByPlatformsTypes;
    return listCountriesByPlatforms.map(({name, slug}) => ({
      title: name,
      url: `/pais/${slug}`
    }));
  }
  async getSearch(q: string): Promise<DataSearch> {
    return await this.ResquestData(`search?q=${q}`);
  }
  async getlastDramas() {
    const {listDoramas} = (await this.ResquestData(`last`)) as DataDoramas;
    return listDoramas;
  }
  // drama
  async getDramaBySlug(slug: string) {
    const {detailDorama} = (await this.ResquestData(
      `drama/${slug}`
    )) as DetailDoramaType;
    return detailDorama;
  }
  async getDramaEpisodesById(id: string) {
    const {paginationEpisode} = (await this.ResquestData(
      `episodes/${id}`
    )) as DataEpisodes;
    return paginationEpisode.items;
  }
  async getDramasSimilarById(id: string) {
    const {similarsDoramas} = (await this.ResquestData(
      `similar/${id}`
    )) as SimilarDoramasType;
    return similarsDoramas;
  }
  // episode
  async getEpisodeBySlug(slug: string) {
    const {detailEpisode} = (await this.ResquestData(
      `episode/${slug}`
    )) as DetailEpisodeType;
    return detailEpisode;
  }
  async getEpisodeNextById(id: string) {
    return await this.ResquestData(`episode/next/${id}`);
  }
  async getEpisodePrevById(id: string) {
    return await this.ResquestData(`episode/prev/${id}`);
  }
  async getEpisodeLinksById(id: string) {
    return (await this.ResquestData(`episode/links/${id}`)) as LinksOnline[];
  }
  // genre
  async getListGenre() {
    const gr = (await this.ResquestData("genre")) as GenreType[];
    return gr.map(({name, slug}) => ({
      title: name,
      url: `/genero/${slug}`
    }));
  }
  async getGenreBySlug(slug: string) {
    return (await this.ResquestData(`genre/${slug}`)) as GenreType;
  }
  async getPaginationDramasByGenreId(id: string, page?: string) {
    return (await this.ResquestData(
      `genre/page/${id}?page=${page}`
    )) as PaginationDoramaTypes;
  }
}
export const Client = new ApiClient();
