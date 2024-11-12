import {useSearchParams} from "@remix-run/react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "~/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem
} from "~/components/ui/pagination";
import {PageInfo} from "~/types/dorama";
interface Props {
  count?: number;
  pageInfo?: PageInfo;
}
function PaginateDorama({count, pageInfo}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageTotal = (count as number) / 20;
  const handlePage = (val: number) => {
    const params = new URLSearchParams();
    params.set("page", `${val}`);
    setSearchParams(params, {
      preventScrollReset: true
    });
  };
  return (
    <section>
      <Pagination>
        <PaginationContent className="gap-3">
          <PaginationItem>
            <Button
              variant="ghost"
              disabled={pageInfo?.currentPage === 1 ? true : false}
              onClick={() => handlePage((pageInfo?.currentPage as number) - 1)}
            >
              <ChevronLeft />
              Anterior
            </Button>
          </PaginationItem>
          <PaginationItem>{pageInfo?.currentPage}</PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>{pageTotal.toFixed(0)}</PaginationItem>
          <PaginationItem>
            <Button
              variant="ghost"
              disabled={pageInfo?.hasNextPage === true ? false : true}
              onClick={() => handlePage((pageInfo?.currentPage as number) + 1)}
            >
              Siguiente
              <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}

export default PaginateDorama;
