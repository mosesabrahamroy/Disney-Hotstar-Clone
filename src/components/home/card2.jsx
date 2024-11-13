export default function Card2() {
  const cards2 = [
    {
      image:"src/assets/lr1.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr2.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr3.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr4.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr5.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr6.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr7.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr8.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr9.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr13.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr14.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },
    {
      image:"src/assets/lr15.jpg",
      title: "2024 &bull; 1 Season &bull; 7 Languages &bull; U/A 16+",
      desc:"An orphaned food cart vendor finds himself a family when his rich stepbrother comes searching for him. How will Sachu gain acceptance in his circumstances?",
    },

  ]
  return (
    <>
    {cards2.map((item, index) =>  
      <div className="w-80  h-full bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <img className="w-80 h-48 rounded-sm" src={item.image} />
        <p className="text-white font-semibold text-base flex flex-row p-1 text-center" >
        {item.title}
        </p>
        <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base p-1">
          {item.desc}
        </p>
      </div>
       )}
    </>
  );
}




