import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Bagian ini menjawab kekhawatiran dan pertanyaan seputar pelayanan Dampit Trans Solo yang sering ditanyakan.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Apakah diperbolehkan untuk menyewa kendaraan tanpa menggunakan layanan Supir dari Dampit Trans?</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                    Tidak diperbolehkan, Dampit Trans tidak menyediakan layanan penyewaan kendaraan tanpa supir.
                    Kami mengutamakan keselamatan dan kenyamanan pelanggan dengan menyediakan supir profesional pada layanan penyewaan kami.
                    Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami melalui email atau chat di WhatsApp.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Bagaimana runtutan pemesanan rental Dampit Trans Solo?</p>
                  <IconChevronDown />{" "}
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  1. Pahami layanan & ketentuan di website.
                  2. Pilih mobil impianmu.
                  3. Hubungi WhatsApp kami untuk pemesanan.
                  4. Tunggu konfirmasi & harga sewa.
                  5. Bayar sesuai instruksi.
                  6. Konfirmasi & informasikan detail perjalanan.
                  7. Siap berpetualang!
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Daerah apa saja yang dapat dijangkau saat memesan kendaraan di Dampit Trans Solo</p>
                  <IconChevronDown />
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Dampit Trans Solo melayani perjalanan ke berbagai daerah di Pulau Jawa. 
                  Contoh layanan rental kami mencakup area populer seperti Jogjakarta, Malang, Surabaya, Bandung, Bali, dan lainnya.
                  Dengan berbagai pilihan kendaraan seperti MPV, mini bus, dan big bus, kami siap mengantarkan Anda untuk berlibur bersama keluarga, perjalanan bisnis, atau liburan santai dengan rekan kerja.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
