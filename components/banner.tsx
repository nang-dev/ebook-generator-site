"use client";
import { motion, AnimatePresence } from "framer-motion";

const books = [
  {
    title: "Exploring the Universe: A Journey Through Space and Time",
    subtext: "Created 1 day ago",
    url: "https://ai-ebook.s3.us-east-1.amazonaws.com/32124815001702929867.2846346.pdf",
    description:
      "Discover the wonders of the universe, exploring space, time, and cosmic mysteries.",
  },
  {
    title: "Master Your Money: Student's Guide to Financial Freedom",
    subtext: "Created 3 days ago",
    url: "https://ai-ebook.s3.us-east-1.amazonaws.com/29996226551702961856.6946757.pdf",
    description:
      "Practical financial advice for students, covering budgeting, saving, and investing.",
  },
  {
    title: "Exploring the World of Fine Wines",
    subtext: "Created 4 days ago",
    url: "https://ai-ebook.s3.us-east-1.amazonaws.com/42557826781703778156.6993895.pdf",
    description:
      "A guide to fine wines, focusing on tasting, selection, and appreciation, tailored for the retired.",
  },
  {
    title: "Unlocking the Ancient Secrets of Egypt's Majestic Pyramids",
    subtext: "Created 7 days ago",
    url: "https://ai-ebook.s3.us-east-1.amazonaws.com/5572481571704335040.4966662.pdf",
    description:
      "An insightful journey into the history and mystery of Egypt's pyramids, designed for history enthusiasts.",
  },
  {
    title: "Chinese Yo-Yo: Unraveling Millennia of Mesmerizing History",
    subtext: "Created 7 days ago",
    url: "https://ai-ebook.s3.us-east-1.amazonaws.com/33946464091704336329.582996.pdf",
    description:
      "A detailed exploration of the Chinese YoYo, its history, and techniques, perfect for cultural enthusiasts.",
  },
].map((book) => ({
  id: crypto.randomUUID(),
  title: book.title,
  subtext: book.subtext,
  description: book.description,
  url: book.url,
}));

const Banner = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -200, opacity: 1 }}
          transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
          className="relative w-full h-screen p-8 select-none"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <section
              key={i}
              className="carousel-section flex flex-col gap-2 mb-2"
              style={{ "--speed": `30000ms` } as React.CSSProperties}
            >
              {books.map((book) => (
                <BookItem
                  key={book.title}
                  title={book.title}
                  subtext={book.subtext}
                  url={book.url}
                  description={book.description}
                />
              ))}
            </section>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { Banner };

const BookItem = (
  props: React.PropsWithChildren<{
    title: string;
    subtext: string;
    description: string;
    url: string;
  }>
): JSX.Element => {
  console.log(props.url);
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:text-white text-black border-primary-white bg-white hover:bg-[#FF3D00] border border-solid transition-transform duration-200 hover:translate-x-1 ease-out shadow-sm lg:w-[95%] lg:max-w-[500px] flex flex-col gap-2 overlay-tertiary-white rounded-lg px-[18px] py-4"
    >
      <h1 className="text-base font-medium">{props.title}</h1>
      <p className="group-hover:opacity-80 opacity-40 text-xs uppercase font-medium text-left">
        {props.subtext}
      </p>
      <div className="border-b border-solid border-secondary-black group-hover:border-primary-white "></div>
      <p className="text-sm group-hover:opacity-100 opacity-60 text-left">
        {props.description}
      </p>
    </a>
  );
};
