import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  http.post("/credit-score/company", async ({ request }) => {
    const requestBody = await request.json();
    console.log(requestBody);
    return HttpResponse.json({ status: "APPROVED", max_amount: 10000 });
  }),
  http.post("/credit-score/person", async ({ request }) => {
    const requestBody = await request.json();
    console.log(requestBody);
    return HttpResponse.json({ status: "APPROVED", max_amount: 88888 });
  }),
  http.get("/credit-score/list", async ({ request }) => {
    const requestBody = await request.json();
    console.log(requestBody);
    return HttpResponse.json({ status: "APPROVED", max_amount: 10000 });
  })
);
