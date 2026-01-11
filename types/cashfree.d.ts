declare module '@cashfreepayments/cashfree-js' {
    export function load(options: { mode: "sandbox" | "production" }): Promise<Cashfree>;

    interface Cashfree {
        checkout(options: { paymentSessionId: string }): void;
    }
}
