import React from "react";
import { usePagination } from "@material-ui/lab/Pagination";
import { useGetPostsCurrentCategory } from "../../hooks/useGetPostsCurrentCategory";
import { StartPositionStore } from "../../store/StartPosition.store";

export default function PaginationTab() {
  const changePosition = StartPositionStore((state) => state?.changePosition);
  const startPosition = StartPositionStore((state) => state?.startPosition);
  const { postLength } = useGetPostsCurrentCategory(startPosition);
  const { items } = usePagination({
    count: postLength < 10 ? 1 : postLength / 10,
  });

  const HandleSetStartPostion = (page, type) => {
    if (
      !page ||
      page < 0 ||
      type === "start-ellipsis" ||
      type === "end-ellipsis"
    ) {
      return;
    }
    changePosition(page * 10);
  };

  return (
    <>
      {postLength && postLength?.length >= 10 ? (
        <div className="row text-center pt-5 border-top uk-animation-fade ">
          <div className="col-md-12">
            <div className="custom-pagination">
              {items.map(({ page, type, selected, ...item }, index) => {
                let children = null;

                if (type === "start-ellipsis" || type === "end-ellipsis") {
                  children = "…";
                } else if (type === "page") {
                  children = (
                    <span
                      style={{
                        fontWeight: selected ? "bold" : undefined,
                        color: "white",
                      }}
                      {...item}
                    >
                      {page}
                    </span>
                  );
                } else if (type === "previous") {
                  children = (
                    <span
                      style={{
                        fontWeight: selected ? "bold" : undefined,
                        color: "white",
                      }}
                      {...item}
                    >
                      prev
                    </span>
                  );
                } else {
                  children = <span {...item}>{type}</span>;
                }

                return (
                  <a
                    className="mr-2 text-white"
                    onClick={() => HandleSetStartPostion(page, type, selected)}
                    key={index}
                  >
                    {children}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
