import { countries } from "@/constants/contries";
import Flag from "react-world-flags";

export const PopoverContent = () => {
  return (
    <div
      style={{
        width: "800px",
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {countries.map((item) => (
        <div key={item.continent}>
          <h3 className="text-lg font-semibold mb-2">{item.continent}</h3>
          <div className="grid grid-cols-2 gap-4">
            {item.countries.map((country) => (
              <div
                key={country.code}
                className="flex items-center justify-start space-x-2"
                style={{ cursor: "pointer" }}
              >
                <Flag
                  code={country.code}
                  style={{ width: "24px", height: "24px" }}
                />
                <p>{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
