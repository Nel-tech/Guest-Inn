import { useRef, useEffect } from 'react';

export default function RoomTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const tabsRef = useRef(null);

  useEffect(() => {
    const selectedTab = tabsRef.current?.querySelector(
      `[data-category="${selectedCategory}"]`
    );
    if (selectedTab) {
      selectedTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedCategory]);

  return (
    <div className="sticky top-16 z-40 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div ref={tabsRef} className="scrollbar-hide flex overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              data-category={category.id}
              className={`flex-shrink-0 px-6 py-3 text-sm font-medium transition-colors duration-300 focus:outline-none ${
                selectedCategory === category.id
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => onSelectCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
