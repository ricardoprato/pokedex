/* pokes: "ascending",
    all: "all",
    types: "all",
    stats: "id",
 */
const sortAndFilter = ({order, allPokes, allTypes, stats}, array) => {
  switch (order) {
    case "ascending":
      switch (allPokes) {
        case "existent":
          if (allTypes === "all") {
            if (stats === "name") {
              return array
                .filter(a => typeof a.id === "number")
                .sort((a, b) => a[stats].localeCompare(b[stats]));
            } else {
              return array
                .filter(a => typeof a.id === "number")
                .sort((a, b) => a[stats] - b[stats]);
            }
          } else {
            if (stats === "name") {
              return array
                .filter(a => typeof a.id === "number")
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => a[stats].localeCompare(b[stats]));
            } else {
              return array
                .filter(a => typeof a.id === "number")
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => a[stats] - b[stats]);
            }
          }
        case "created":
          if (allTypes === "all") {
            if (stats === "name") {
              return array
                .filter(a => typeof a.id === "string")
                .sort((a, b) => a[stats].localeCompare(b[stats]));
            } else {
              return array
                .filter(a => typeof a.id === "string")
                .sort((a, b) => a[stats] - b[stats]);
            }
          } else {
            if (stats === "name") {
              return array
                .filter(a => typeof a.id === "string")
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => a[stats].localeCompare(b[stats]));
            } else {
              return array
                .filter(a => typeof a.id === "string")
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => a[stats] - b[stats]);
            }
          }
        default:
          if (allTypes === "all") {
            if (stats === "name") {
              return array.sort((a, b) => a[stats].localeCompare(b[stats]));
            } else {
              return array.sort((a, b) => a[stats] - b[stats]);
            }
          } else {
            if (stats === "name") {
              return array
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => a[stats].localeCompare(b[stats]));
            } else {
              return array
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => a[stats] - b[stats]);
            }
          }
      }
    case "descending":
      switch (allPokes) {
        case "existent":
          if (allTypes === "all") {
            if (stats === "name") {
              return array
                .filter(a => typeof a.id === "number")
                .sort((a, b) => b[stats].localeCompare(a[stats]));
            } else {
              return array
                .filter(a => typeof a.id === "number")
                .sort((a, b) => b[stats] - a[stats]);
            }
          } else {
            if (stats === "name") {
              return array
                .filter(a => typeof a.id === "number")
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => b[stats].localeCompare(a[stats]));
            } else {
              return array
                .filter(a => typeof a.id === "number")
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => b[stats] - a[stats]);
            }
          }
        case "created":
          if (allTypes === "all") {
            if (stats === "name") {
              return array
                .filter(a => typeof a.id === "string")
                .sort((a, b) => b[stats].localeCompare(a[stats]));
            } else {
              return array
                .filter(a => typeof a.id === "string")
                .sort((a, b) => b[stats] - a[stats]);
            }
          } else {
            if (stats === "name") {
              return array
                .filter(a => typeof a.id === "string")
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => b[stats].localeCompare(a[stats]));
            } else {
              return array
                .filter(a => typeof a.id === "string")
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => b[stats] - a[stats]);
            }
          }
        default:
          if (allTypes === "all") {
            if (stats === "name") {
              return array.sort((a, b) => b[stats].localeCompare(a[stats]));
            } else {
              return array.sort((a, b) => b[stats] - a[stats]);
            }
          } else {
            if (stats === "name") {
              return array
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => b[stats].localeCompare(a[stats]));
            } else {
              return array
                .filter(a => a.types.includes(allTypes))
                .sort((a, b) => b[stats] - a[stats]);
            }
          }
      }
    default:
      return array;
  }
};
export default sortAndFilter;
