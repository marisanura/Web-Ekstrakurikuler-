        const form =
            document.getElementById("registrationForm");

        const nama =
            document.getElementById("nama");

        const email =
            document.getElementById("email");

        const password =
            document.getElementById("password");

        const confirmPassword =
            document.getElementById("confirmPassword");

        const namaWrapper =
            document.getElementById("namaWrapper");

        const emailWrapper =
            document.getElementById("emailWrapper");

        const passwordWrapper =
            document.getElementById("passwordWrapper");

        const confirmPasswordWrapper =
            document.getElementById("confirmPasswordWrapper");

        const namaMessage =
            document.getElementById("namaMessage");

        const emailMessage =
            document.getElementById("emailMessage");

        const passwordMessage =
            document.getElementById("passwordMessage");

        const confirmPasswordMessage =
            document.getElementById("confirmPasswordMessage");

        const extraMessage =
            document.getElementById("extraMessage");

        const customSelect =
            document.getElementById("customSelect");

        const selectBox =
            document.getElementById("selectBox");

        const selectedText =
            document.getElementById("selectedText");

        const successBox =
            document.getElementById("successBox");

        const submitBtn =
            document.getElementById("submitBtn");

        let selectedExtra = "";


        /* =====================================================
           CUSTOM DROPDOWN
        ====================================================== */

        selectBox.addEventListener("click", function () {

            customSelect.classList.toggle("active");

        });


        document.querySelectorAll(".option").forEach(option => {

            option.addEventListener("click", function () {

                selectedExtra =
                    this.dataset.value;

                selectedText.textContent =
                    this.dataset.value;

                selectedText.style.color =
                    "#354e68";

                customSelect.classList.remove(
                    "active"
                );

                extraMessage.textContent = "";

            });

        });


        document.addEventListener("click", function (event) {

            if (!customSelect.contains(event.target)) {

                customSelect.classList.remove(
                    "active"
                );

            }

        });


        /* =====================================================
           PASSWORD SHOW / HIDE
        ====================================================== */

        document
            .querySelectorAll(".toggle-password")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    function () {

                        const targetId =
                            this.dataset.target;

                        const input =
                            document.getElementById(
                                targetId
                            );

                        const icon =
                            this.querySelector("i");

                        if (
                            input.type ===
                            "password"
                        ) {

                            input.type = "text";

                            icon.classList.remove(
                                "fa-eye"
                            );

                            icon.classList.add(
                                "fa-eye-slash"
                            );

                        } else {

                            input.type =
                                "password";

                            icon.classList.remove(
                                "fa-eye-slash"
                            );

                            icon.classList.add(
                                "fa-eye"
                            );

                        }

                    }
                );

            });


        /* =====================================================
           VALIDATION FUNCTIONS
        ====================================================== */

        function setSuccess(
            wrapper,
            messageElement,
            text
        ) {

            wrapper.classList.remove(
                "invalid"
            );

            wrapper.classList.add(
                "valid"
            );

            messageElement.className =
                "validation-message success";

            messageElement.textContent =
                text;

        }


        function setError(
            wrapper,
            messageElement,
            text
        ) {

            wrapper.classList.remove(
                "valid"
            );

            wrapper.classList.add(
                "invalid"
            );

            messageElement.className =
                "validation-message error";

            messageElement.textContent =
                text;

        }


        function clearValidation(
            wrapper,
            messageElement
        ) {

            wrapper.classList.remove(
                "valid",
                "invalid"
            );

            messageElement.className =
                "validation-message";

            messageElement.textContent =
                "";

        }


        /* =====================================================
           LIVE NAME VALIDATION
        ====================================================== */

        nama.addEventListener(
            "input",
            function () {

                const value =
                    nama.value.trim();

                if (value.length === 0) {

                    clearValidation(
                        namaWrapper,
                        namaMessage
                    );

                    return;

                }

                if (value.length < 3) {

                    setError(
                        namaWrapper,
                        namaMessage,
                        "Nama minimal 3 karakter."
                    );

                } else {

                    setSuccess(
                        namaWrapper,
                        namaMessage,
                        "Nama sudah sesuai."
                    );

                }

            }
        );


        /* =====================================================
           EMAIL VALIDATION
        ====================================================== */

        email.addEventListener(
            "input",
            function () {

                const value =
                    email.value.trim();

                if (value.length === 0) {

                    clearValidation(
                        emailWrapper,
                        emailMessage
                    );

                    return;

                }

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(value)) {

                    setError(
                        emailWrapper,
                        emailMessage,
                        "Format email belum valid."
                    );

                } else {

                    setSuccess(
                        emailWrapper,
                        emailMessage,
                        "Email valid."
                    );

                }

            }
        );


        /* =====================================================
           PASSWORD VALIDATION
        ====================================================== */

        password.addEventListener(
            "input",
            function () {

                const value =
                    password.value;

                if (value.length === 0) {

                    clearValidation(
                        passwordWrapper,
                        passwordMessage
                    );

                    return;

                }

                if (value.length < 8) {

                    setError(
                        passwordWrapper,
                        passwordMessage,
                        "Password minimal 8 karakter."
                    );

                } else {

                    setSuccess(
                        passwordWrapper,
                        passwordMessage,
                        "Password sudah aman."
                    );

                }

                checkConfirmPassword();

            }
        );


        /* =====================================================
           CONFIRM PASSWORD
        ====================================================== */

        function checkConfirmPassword() {

            const value =
                confirmPassword.value;

            if (value.length === 0) {

                clearValidation(
                    confirmPasswordWrapper,
                    confirmPasswordMessage
                );

                return;

            }

            if (value !== password.value) {

                setError(
                    confirmPasswordWrapper,
                    confirmPasswordMessage,
                    "Password tidak sama."
                );

            } else {

                setSuccess(
                    confirmPasswordWrapper,
                    confirmPasswordMessage,
                    "Password cocok."
                );

            }

        }


        confirmPassword.addEventListener(
            "input",
            checkConfirmPassword
        );


        /* =====================================================
           FORM SUBMIT
        ====================================================== */

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                let valid = true;


                if (
                    nama.value.trim().length < 3
                ) {

                    setError(
                        namaWrapper,
                        namaMessage,
                        "Masukkan nama lengkap Anda."
                    );

                    valid = false;

                }


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                    !emailPattern.test(
                        email.value.trim()
                    )
                ) {

                    setError(
                        emailWrapper,
                        emailMessage,
                        "Masukkan email yang valid."
                    );

                    valid = false;

                }


                if (
                    password.value.length < 8
                ) {

                    setError(
                        passwordWrapper,
                        passwordMessage,
                        "Password minimal 8 karakter."
                    );

                    valid = false;

                }


                if (
                    confirmPassword.value === "" ||
                    confirmPassword.value !==
                    password.value
                ) {

                    setError(
                        confirmPasswordWrapper,
                        confirmPasswordMessage,
                        "Konfirmasi password tidak sesuai."
                    );

                    valid = false;

                }


                if (selectedExtra === "") {

                    extraMessage.className =
                        "validation-message error";

                    extraMessage.textContent =
                        "Silakan pilih ekstrakurikuler.";

                    valid = false;

                }


                if (!valid) {

                    successBox.classList.remove(
                        "show"
                    );

                    return;

                }


                submitBtn.classList.add(
                    "loading"
                );

                submitBtn.innerHTML =
                    '<i class="fa-solid fa-spinner fa-spin"></i>' +
                    '<span>Memproses...</span>';


                setTimeout(function () {

                    submitBtn.classList.remove(
                        "loading"
                    );

                    submitBtn.innerHTML =
                        '<i class="fa-solid fa-check"></i>' +
                        '<span>Berhasil Terdaftar</span>';

                    successBox.classList.add(
                        "show"
                    );


                    if (
                        window.innerWidth < 600
                    ) {

                        successBox.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                }, 1000);

            }
        );


        /* =====================================================
           CHATBOT
        ====================================================== */

        const chatbotButton =
            document.getElementById(
                "chatbotButton"
            );

        const chatbotBox =
            document.getElementById(
                "chatbotBox"
            );

        const chatbotMessages =
            document.getElementById(
                "chatbotMessages"
            );

        const chatbotInput =
            document.getElementById(
                "chatbotInput"
            );

        const chatbotSend =
            document.getElementById(
                "chatbotSend"
            );


        /* BUKA / TUTUP CHATBOT */

        chatbotButton.addEventListener(
            "click",
            function () {

                chatbotBox.classList.toggle(
                    "show"
                );

                chatbotButton.classList.toggle(
                    "active"
                );

                const icon =
                    chatbotButton.querySelector(
                        "i"
                    );

                if (
                    chatbotBox.classList.contains(
                        "show"
                    )
                ) {

                    icon.classList.remove(
                        "fa-comments"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                    setTimeout(function () {

                        chatbotInput.focus();

                    }, 300);

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-comments"
                    );

                }

            }
        );


        /* WAKTU PESAN */

        function getChatTime() {

            const now =
                new Date();

            return now.toLocaleTimeString(
                "id-ID",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );

        }


        /* TAMBAH PESAN */

        function addChatMessage(
            message,
            sender
        ) {

            const div =
                document.createElement(
                    "div"
                );

            div.className =
                "chat-message " +
                sender;

            div.innerHTML = `
                ${message}
                <span class="chat-time">
                    ${getChatTime()}
                </span>
            `;

            chatbotMessages.appendChild(
                div
            );

            chatbotMessages.scrollTop =
                chatbotMessages.scrollHeight;

        }


        /* =====================================================
           JAWABAN CHATBOT
        ====================================================== */

        function getBotResponse(
            question
        ) {

            const text =
                question
                    .toLowerCase()
                    .trim();


            /* SALAM */

            if (
                text.includes("halo") ||
                text.includes("hai") ||
                text.includes("hello")
            ) {

                return `
                    Halo juga!
                    <br><br>
                    Ada yang ingin kamu tanyakan
                    tentang pendaftaran ekstrakurikuler?
                `;

            }


            /* CARA DAFTAR */

            if (
                text.includes("cara daftar") ||
                text.includes("mendaftar") ||
                text.includes("pendaftaran")
            ) {

                return `
                    Cara mendaftar cukup mudah:
                    <br><br>
                    1. Isi nama lengkap.
                    <br>
                    2. Masukkan email.
                    <br>
                    3. Buat password minimal 8 karakter.
                    <br>
                    4. Konfirmasi password.
                    <br>
                    5. Pilih ekstrakurikuler.
                    <br>
                    6. Klik tombol <b>Daftar</b>.
                `;

            }


            /* DAFTAR EKSTRA */

            if (
                text.includes("ekstrakurikuler") ||
                text.includes("ekstra") ||
                text.includes("pilihan")
            ) {

                return `
                    Ekstrakurikuler yang tersedia:
                    <br><br>
                    Pramuka, PMR, Paskibra, Tari,
                    Jurnalis, Bahasa Jepang,
                    Paduan Suara, Rohis,
                    Bela Diri / Silat, MTQ,
                    Rebana, dan OSIS.
                `;

            }


            /* PASSWORD */

            if (
                text.includes("password") ||
                text.includes("kata sandi")
            ) {

                return `
                    Password harus memiliki
                    <b>minimal 8 karakter</b>.
                    <br><br>
                    Password konfirmasi juga harus
                    sama dengan password utama.
                `;

            }


            /* EMAIL */

            if (
                text.includes("email") ||
                text.includes("e-mail")
            ) {

                return `
                    Gunakan alamat email yang masih
                    aktif dengan format yang benar.
                    <br><br>
                    Contoh:
                    <b>nama@email.com</b>
                `;

            }


            /* PRAMUKA */

            if (
                text.includes("pramuka")
            ) {

                return `
                    Pramuka membantu mengembangkan
                    kemandirian, kedisiplinan,
                    kerja sama, dan berbagai
                    keterampilan anggota.
                `;

            }


            /* PMR */

            if (
                text.includes("pmr")
            ) {

                return `
                    PMR berkaitan dengan kepalangmerahan,
                    kesehatan, kepedulian, dan
                    pertolongan pertama.
                `;

            }


            /* PASKIBRA */

            if (
                text.includes("paskibra")
            ) {

                return `
                    Paskibra berfokus pada kedisiplinan,
                    kekompakan, tanggung jawab,
                    dan keterampilan baris-berbaris.
                `;

            }


            /* TARI */

            if (
                text.includes("tari")
            ) {

                return `
                    Ekstrakurikuler Tari menjadi wadah
                    untuk mengembangkan kreativitas
                    dan keterampilan dalam seni tari.
                `;

            }


            /* JURNALIS */

            if (
                text.includes("jurnalis")
            ) {

                return `
                    Jurnalis cocok untuk kamu yang
                    tertarik dengan kegiatan menulis,
                    mencari informasi, dan membuat
                    konten berita sekolah.
                `;

            }


            /* BAHASA JEPANG */

            if (
                text.includes("bahasa jepang") ||
                text.includes("jepang")
            ) {

                return `
                    Bahasa Jepang menjadi wadah untuk
                    mempelajari bahasa dan budaya Jepang
                    dengan cara yang menarik.
                `;

            }


            /* PADUAN SUARA */

            if (
                text.includes("paduan suara") ||
                text.includes("suara")
            ) {

                return `
                    Paduan Suara merupakan kegiatan
                    untuk mengembangkan kemampuan vokal,
                    musikalitas, dan kekompakan.
                `;

            }


            /* ROHIS */

            if (
                text.includes("rohis")
            ) {

                return `
                    Rohis merupakan kegiatan untuk
                    memperdalam pengetahuan keagamaan
                    serta membangun kebersamaan.
                `;

            }


            /* BELA DIRI */

            if (
                text.includes("silat") ||
                text.includes("bela diri")
            ) {

                return `
                    Bela Diri / Silat membantu
                    mengembangkan disiplin,
                    keberanian, konsentrasi,
                    dan keterampilan bela diri.
                `;

            }


            /* MTQ */

            if (
                text.includes("mtq")
            ) {

                return `
                    MTQ menjadi wadah untuk mengembangkan
                    kemampuan membaca dan memahami
                    Al-Qur'an.
                `;

            }


            /* REBANA */

            if (
                text.includes("rebana")
            ) {

                return `
                    Rebana merupakan kegiatan seni musik
                    yang mengembangkan kemampuan bermain
                    alat musik dan kekompakan kelompok.
                `;

            }


            /* OSIS */

            if (
                text.includes("osis")
            ) {

                return `
                    OSIS menjadi wadah untuk belajar
                    organisasi, kepemimpinan, kerja sama,
                    dan tanggung jawab.
                `;

            }


            /* TERIMA KASIH */

            if (
                text.includes("terima kasih") ||
                text.includes("makasih") ||
                text.includes("thanks")
            ) {

                return `
                    Sama-sama.
                    <br><br>
                    Semoga proses pendaftarannya
                    berjalan lancar!
                `;

            }


            /* DEFAULT */

            return `
                Maaf, saya belum memahami pertanyaan itu.
                <br><br>
                Kamu bisa bertanya tentang:
                <br>
                • Cara pendaftaran
                <br>
                • Daftar ekstrakurikuler
                <br>
                • Password
                <br>
                • Email
                <br>
                • Informasi ekstrakurikuler
            `;

        }


        /* =====================================================
           KIRIM CHAT
        ====================================================== */

        function sendChat() {

            const question =
                chatbotInput.value.trim();

            if (
                question === ""
            ) {

                return;

            }


            addChatMessage(
                question,
                "user"
            );

            chatbotInput.value =
                "";


            setTimeout(
                function () {

                    const response =
                        getBotResponse(
                            question
                        );

                    addChatMessage(
                        response,
                        "bot"
                    );

                },
                500
            );

        }


        /* TOMBOL KIRIM */

        chatbotSend.addEventListener(
            "click",
            sendChat
        );


        /* ENTER */

        chatbotInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    sendChat();

                }

            }
        );


        /* =====================================================
           QUICK QUESTIONS
        ====================================================== */

        document
            .querySelectorAll(".quick-btn")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    function () {

                        const question =
                            this.dataset.question;

                        addChatMessage(
                            question,
                            "user"
                        );

                        setTimeout(
                            function () {

                                addChatMessage(
                                    getBotResponse(
                                        question
                                    ),
                                    "bot"
                                );

                            },
                            500
                        );

                    }
                );

            });