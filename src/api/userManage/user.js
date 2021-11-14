import request from "@/utils/request";

export function login(data) {
  return request({
    url: "login",
    method: "post",
    data
  });
}

// export function getInfo(token) {
//   return request({
//     url: "/vue-admin-template/user/info",
//     method: "get",
//     params: { token }
//   });
// }

// export function logout() {
//   return request({
//     url: "/vue-admin-template/user/logout",
//     method: "post"
//   });
// }

export default {
  // 获取用户列表
  getUserList(data) {
    return request.get("/users", { params: data });
  },
  // 添加用户
  addUser(data) {
    return request.post("/users", data);
  },
  // 根据id获取用户信息
  getUserInfoById(id) {
    return request.get(`/users/${id}`);
  }
};