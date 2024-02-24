import { Routes, Route } from "react-router-dom";
import { Analitics } from "../Analitics";
import { Friends } from "../Friends";
import { Home } from "../Home";
import { Mail } from "../Mail";
import { NotFound } from "../NotFound";
import { Payment } from "../Payment";
import { Rocket } from "../Rocket";
import { Upload } from "../Upload";

export const AppRoute = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/analitics" element={<Analitics />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/rocket" element={<Rocket />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
