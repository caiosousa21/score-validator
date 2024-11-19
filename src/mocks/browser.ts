import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  http.post("/credit-score/person", async () => {
    return Math.random() > 0.5
      ? HttpResponse.json({ status: "APPROVED", max_amount: 88888 })
      : HttpResponse.json({ status: "DENIED" });
  }),
  http.post("/credit-score/company", async () => {
    return Math.random() > 0.5
      ? HttpResponse.json({ status: "APPROVED", max_amount: 10000 })
      : HttpResponse.json({ status: "DENIED" });
  }),
  http.get("/credit-score/list", async () => {
    return HttpResponse.json({
      persons: [
        {
          person: {
            income: 1000,
            city: "Winterfell",
            name: "John Snow",
            age: 30,
            document: "00000000000",
          },
          credit_result: {
            max_amount: 2000,
            status: "APPROVED",
          },
        },
        {
          person: {
            income: 1000,
            city: "Middle-Earth",
            name: "Gandalf o Cinzento",
            age: 30,
            document: "00000000001",
          },
          credit_result: {
            status: "DENIED",
          },
        },
      ],
      companies: [
        {
          company: {
            revenue: 10000,
            city: "Ibitinga",
            name: "Borracharia dois irmãos",
            document: "00000000000000",
          },
          credit_result: {
            max_amount: 2000,
            status: "APPROVED",
          },
        },
      ],
    });
  })
);
