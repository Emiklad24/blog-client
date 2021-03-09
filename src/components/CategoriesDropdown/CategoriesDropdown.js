import CustomLink from "../CustomLink/CustomLink";
import { useGetAllCategories } from "../../hooks/useGetAllCategories";
export default function CategoriesDropdown() {
  const { data } = useGetAllCategories();

  return (
    <>
      {data && Array?.isArray?.(data) && data?.length !== 0 ? (
        <li className="has-children uk-animation-fade">
          <a>Category</a>
          <ul className="dropdown">
            {data?.map((item, index) => (
              <CustomLink urlPath={`/category/${item?.name}`} key={index}>
                {item?.name} {`(${item?.posts?.length})`}
              </CustomLink>
            ))}
          </ul>
        </li>
      ) : null}
    </>
  );
}
