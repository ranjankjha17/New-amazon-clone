function FooterNav({ head, subHead }) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-white text-lg font-semibold">{head}</p>
      <ul>
        {subHead.map((sub, index) => {
          return (
            <li
              key={index}
              className="link opacity-90 hover:opacity-100 hover:text-white transition-all duration-200"
            >
              {sub}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterNav;
