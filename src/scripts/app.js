const logo = document.getElementById('logo');
        const me = document.getElementById("me");
        const barcode = document.getElementById("barcode");
        const body = document.body;
        let darkTheme = false;
        themeCircle.addEventListener("click", ChangeTheme);
        window.addEventListener('load', (event) => {
            meAnimation();
        });
        function ChangeTheme() {
            themeCircle.style.scale = "100";
            themeIcon.style.opacity = 0;
            setTimeout(function () {
                if (darkTheme == false) {
                    darkTheme = true;
                    logo.style.filter = "invert(1)";
                    barcode.style.filter = "invert(1)"
                    body.style.background = "var(--dark)";
                    mainWrapper.style.border = "50px solid #000";
                    titleText.style.color = "#fff";
                    titleTextMask.style.color = "#fff";
                    themeCircle.style.color = "var(--lightBlue)";
                    themeIcon.className = "fa-regular fa-sun";
                    setTimeout(function () {
                        themeCircle.style.background = "var(--black)";
                        themeIcon.style.opacity = 1;
                    }, 1000);


                } else if (darkTheme == true) {
                    darkTheme = false;
                    logo.style.filter = "invert(0)";
                    barcode.style.filter = "invert(0)"
                    body.style.background = "var(--white)";
                    mainWrapper.style.border = "50px solid #141414";
                    titleText.style.color = "#000";
                    titleTextMask.style.color = "#000";
                    themeCircle.style.color = "#CBD7E3";
                    themeIcon.className = "fa-solid fa-moon";
                    setTimeout(function () {
                        themeCircle.style.background = "var(--gray)";
                        themeIcon.style.opacity = 1;
                    }, 1000);

                }
                themeCircle.style.scale = "1";

            }, 1100);

        }
        function meAnimation() {
            setInterval(function () {
                setTimeout(function () { me.style.backgroundImage = "url('images/meFramesForAnimation/meFrame1.png')"; }, 0);
                setTimeout(function () { me.style.backgroundImage = "url('images/meFramesForAnimation/meFrame2.png')"; }, 100);
                setTimeout(function () { me.style.backgroundImage = "url('images/meFramesForAnimation/meFrame3.png')"; }, 200);
            }, 300)

        }


        function createBarcode() {
            let lines = [];
            for (let i = 0; i < 20; i++) {
                lines[i] = document.createElement("div");
                lines[i].setAttribute("id", "line");
                barcode.appendChild(lines[i]);
                let random = Math.floor(Math.random() * 5) + 1;
                lines[i].style.height = 3 * random + "px";
            }
        }
        createBarcode();

        document.addEventListener('mousemove', function (e) {
            let userX = e.clientX;
            let userY = e.clientY;
            me.style.marginLeft = -userX / 70 + "px";
            map.style.marginLeft = userX / 80 + "px";
            titleText.style.margin = -userY / 60 + "px" + " " + -userX / 60 + "px";
            titleTextMask.style.margin = -userY / 60 + "px" + " " + -userX / 60 + "px";
        });

        function openAnyMenu() {
            me.style.left = "95%";
            me.style.opacity = "0";
            setTimeout(function () {
                map.style.scale = "0.5";
                map.style.left = "83%";
                map.style.rotate = "-3deg";
                map.style.zIndex = 2;
                map.style.borderRadius = "100%";
            }, 200);

            setTimeout(function () {
                map.style.scale = "1.2";
                map.style.borderRadius = "0%";
            }, 500);
            body.style.backgroundPosition = "0 0";
            //content.style.display = "block";
            titleText.style.dislay = "none";
            titleTextMask.style.display = "none";

            //content.style.height = "80%";
            //content.style.width = "70%";

        }
