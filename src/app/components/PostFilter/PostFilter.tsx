import { Category } from "@/app/types/Category";
import "./PostFilter.scss";

type Props = {
  query: string;
  setQuery: (value: any) => void;
  category: Category;
  setCategory: (value: any) => void;
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
          <option key={selectedType} value={selectedType}>
            {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
          </option>
        ))}
      </select>
      <input
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
