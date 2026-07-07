import { Instrument_Serif, Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-instrument-serif",
    style: "italic",
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const headers = [
    "Feature",
    "Single Cafe Reel",
    "Cafe Reel Growth Pack",
    "Editing Package",
    "Brand / Event Film",
];

const features = [
    { name: "Shoot included", status: ["check", "check", "minus", "check"] },
    { name: "Editing included", status: ["check", "check", "check", "check"] },
    { name: "Color grading", status: ["check", "check", "check", "check"] },
    { name: "Captions", status: ["minus", "check", "check", "check"] },
    { name: "Music sync", status: ["check", "check", "check", "check"] },
    { name: "Social-ready exports", status: ["check", "check", "check", "check"] },
];

const bestFor = [
    "Testing cinematic content for your cafe or restaurant.",
    "Cafes that want consistent Instagram presence.",
    "Creators and brands who already have footage.",
    "Launches, events, brand stories and campaign videos.",
];

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
/* ------------------------------------------------------------------ */

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 text-red-500 inline"
            aria-hidden="true"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

function MinusIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 text-white/30 inline"
            aria-hidden="true"
        >
            <path d="M5 12h14" />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ComparisonTable() {
    return (
        <section className="relative py-[2.75rem] lg:py-[5vw] bg-[#050505]">
            <div className="max-w-[80rem] mx-auto px-[1.125rem] md:px-[4vw]">
                {/* Section label */}
                <div className="mb-4 flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-red-500" />
                    <p
                        className={`${poppins.className} text-[11px] uppercase tracking-[0.18em] font-bold text-[#ffffffa8]`}
                    >
                        // Compare
                    </p>
                </div>

                {/* Heading */}
                <h2
                        className={`${instrumentSerif.className} mt-3 text-white text-[2.25em] md:text-[7.2vw] italic leading-[1.05] max-w-[16ch] -tracking-[0.025em]`}
                    >
                    What&apos;s included
                </h2>

                {/* Table Wrapper */}
                <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08]">
                    <table className="w-full min-w-[640px]">
                        <thead>
                            <tr className="bg-[#0a0a0a]">
                                {headers.map((header, i) => (
                                    <th
                                        key={header}
                                        className={`p-4 text-[12px] uppercase tracking-[0.14em] text-white font-semibold ${
                                            i === 0
                                                ? "text-left text-[11px] tracking-[0.16em] text-white/70 font-medium"
                                                : "text-center"
                                        }`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Feature Rows */}
                            {features.map((row, rowIndex) => (
                                <tr
                                    key={row.name}
                                    className="border-t border-white/5"
                                >
                                    <td
                                        className={`${poppins.className} p-4 text-sm text-white/75`}
                                    >
                                        {row.name}
                                    </td>
                                    {row.status.map((status, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="p-4 text-center"
                                        >
                                            {status === "check" ? (
                                                <CheckIcon />
                                            ) : (
                                                <MinusIcon />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            {/* Best For Row */}
                            <tr className="border-t border-white/5 bg-[#0a0a0a]/40">
                                <td
                                    className={`${poppins.className} p-4 text-[11px] uppercase tracking-[0.14em] text-white/55`}
                                >
                                    Best for
                                </td>
                                {bestFor.map((text, i) => (
                                    <td
                                        key={i}
                                        className="p-4 text-center"
                                    >
                                        <span
                                            className={`${poppins.className} inline-block text-[13px] text-white/70 max-w-[200px]`}
                                        >
                                            {text}
                                        </span>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}