/* eslint-disable react/prop-types */
import Header from "./header.jsx";
import Item from "./item.jsx";
export default function CV({ name, tel, email, location, itemspack=[]}) {
  return (
    <>
      <div className="cv">
        <Header name={name} tel={tel} email={email} location={location} />
        <main>
          {itemspack.map((item) => {
            return (<Item title={item[0]} items={item[1]} key={item[0]} />);
          })}
        </main>
      </div>
    </>
  );
}
