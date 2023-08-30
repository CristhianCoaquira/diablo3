import { getToken } from "@/api/oauth";

describe("API endpoint tests", () => {
  it("should get the token", async () => {
    const response = await getToken();
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("access_token");
  });
});
