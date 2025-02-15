import { SkillCategory } from "../../utils/skills";

interface SkillFilterProps {
  categories: { id: SkillCategory; label: string }[];
  activeCategory: SkillCategory;
  onCategoryChange: (category: SkillCategory) => void;
}

export default function SkillFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: SkillFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 justify-center">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onCategoryChange(id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
						${
              activeCategory === id
                ? "bg-skin-base text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
