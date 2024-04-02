import Item from "./Item/Item";

export default function Accordion({ accordionData }) {
  return (
    <>
      {accordionData.accordionItems?.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          content={item.content}
          listItems={item.listItems}
        ></Item>
      ))}
    </>
  );
}
