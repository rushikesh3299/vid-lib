export const Footer = () => {
  return (
    <footer className="bg-lightGray mt-6 p-4">
      <div className="mx-auto flex flex-col gap-3 items-center">
        <p>
          Made with <i className="fas fa-heart"></i> by Rushikesh
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/rushikesh3299"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github text-3xl hover:opacity-60"></i>
          </a>
          <a
            href="https://twitter.com/rushikesh3299"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter text-3xl hover:opacity-60"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rushikesh-chougule-621854192/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in text-3xl hover:opacity-60"></i>
          </a>
        </div>
        <p>@2022 BizWorld Video</p>
      </div>
    </footer>
  );
};
