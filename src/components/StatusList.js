import { useState } from "react";

function StatusList() {
  const [showPrivate, togglePrivate] = useState(true);

  return (
    <>
      <ul className="mt-30">
        {[
          { title: "Here is the first status", private: false },
          { title: "Here is the second status", private: true },
          { title: "Here is the third status", private: false }
        ].map(navigationItem => (
          <li className={`${
            navigationItem.private ? (showPrivate ? `block` : `hidden`) : 'block'
          } mt-3 md:mt-0 md:ml-6`} key={navigationItem.title}>
            {navigationItem.title}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => togglePrivate(!showPrivate)}>{ showPrivate ? 'Show' : 'Hide' } private items</button>
    </>
  );
}

export default StatusList;
