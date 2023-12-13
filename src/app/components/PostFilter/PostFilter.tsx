import { Category } from "@/app/types/Category";
import "./PostFilter.scss";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  category: Category;
  setCategory: (value: Category) => void;
};

const PostFilter: React.FC<Props> = ({
  query,
  setQuery,
  category,
  setCategory,
}) => {
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as Category);
  };

  return (
    <div className="filter">
      <select
        name="categories"
        id="categories"
        className="filter__categories"
        value={category}
        onChange={handleSelectChange}
      >
        {Object.values(Category).map((selectedType) => (
          <option
            key={selectedType}
            value={selectedType}
            className="filter__category"
          >
            {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
          </option>
        ))}
      </select>

      <input
        id="filter__query"
        className="filter__query"
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Enter post title"
      />
    </div>
  );
};

export default PostFilter;
