import {ForwardRefExoticComponent, RefAttributes} from "react";

export type ItemNav = {
  readonly title: string;
  readonly url: string;
};
export interface NavType {
  readonly title: string;
  readonly url: string;
  readonly Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  readonly items: ItemNav[];
}
