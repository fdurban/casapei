import React from "react";

interface MenuItem {
  name: string;
  option?: string;
  price: string | string[];
}

interface MenuSection {
  sectionName: string;
  items: MenuItem[];
}

const MenuPage: React.FC = () => {
  const menuItems: MenuItem[] = [
    { name: "Dumplings al vapor", option: "Plancha(+0,5€)", price: "$10.99" },
    { name: "Cerdo y col china", option: "", price: "$10.99" },
    { name: "Cebollinos, huevo y gambas", option: "", price: "$10.99" },
    { name: "Verduras", option: "", price: "$10.99" },
    { name: "Kimchi y cerdo", option: "", price: "$10.99" },
    { name: "Ternera y cebolla", option: "", price: "$10.99" },
  ];

  const specialties: MenuItem[] = [
    {
      name: "Wonton frito relleno de cerdo con salsa estilo coreano",
      option: "(Salsa picante o dulce de soja)",
      price: ["6.8€/7piezas", "12€/14piezas"],
    },
    { name: "Ensalada de rollitos(salsa agridulce picante o soja)", option: "", price: ["12€"] },
  ];

  const soupsAndNoodles: MenuItem[] = [
    { name: "Sopa de dumplings Kimchi / Cerdo / Ternera", option: "", price: "13,5€" },
    { name: "Sopa de tallarines y wonton", option: "", price: "12,5€" },
    { name: "Arroz blanco", option: "", price: "2,5€" },
  ];

  const banchan: MenuItem[] = [
    { name: "Kimchi clásico", option: "", price: "3€" },
    { name: "Ensalada de pepino", option: "", price: "3€" },
    { name: "Anchoas salteadas con salsa dulce y picante", option: "", price: "3€" },
    { name: "Encurtido rábano amarillo", option: "", price: "3€" },
  ];

  const renderMenuSection = (section: MenuSection) => (
    <div className="container mx-auto mt-12">
      <div className="flex justify-between">
        <p>{section.sectionName}</p>
      </div>
      <hr className="my-2" />
      {section.items.map((item, index) => (
        <>
        <div key={index} className="flex justify-between">
          <div>
            <p>{item.name}</p>
            {item.option && <p>{item.option}</p>}
          </div>
          <div>
            <p>{item.price}</p>
            {Array.isArray(item.price) &&
              item.price.map((price, idx) => <p key={idx}>{price}</p>)}
          </div>
        </div>
        <hr />
        </>
      ))}
    </div>
  );

  return (
    <>
      {renderMenuSection({ sectionName: "Dumplings", items: menuItems })}
      {renderMenuSection({ sectionName: "Especialidades de Casa Pei+", items: specialties })}
      {renderMenuSection({ sectionName: "Sopa y Tallarines", items: soupsAndNoodles })}
      {renderMenuSection({ sectionName: "Banchan", items: banchan })}
    </>
  );
};

export default MenuPage;

