import { intersection } from "lodash";

export function isLoggedIn() {
  /*
   * Note:
   *  This app assume if local storage have roles it means
   *  user is authenticated you can update this logic as per your app.
   */
  //   return !!localStorage.getItem("roles") || true;
  return true;
}

export function isArrayWithLength(arr) {
  return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes) {
  const roles = ["ADMIN"];
  console.log(routes);
  const filRoutes = routes.filter(({ permission }) => {
    console.log(permission);
    if (!permission) return true;
    else if (!isArrayWithLength(permission)) return true;
    else return intersection(permission, roles).length;
  });
  console.log(filRoutes);
  return filRoutes;
}
