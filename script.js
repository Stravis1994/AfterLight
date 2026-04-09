addEventListener("DOMContentLoaded", function () {
    // Handles sign-up form submission on the sign-up page.
    const signUpForm = document.getElementById("signUpForm");
    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const surname = document.getElementById("surname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            console.log("name:", name);
            console.log("Surname:", surname);
            console.log("Email:", email);
            console.log("Password:", password);

            window.location.href = "user-page.html";
            alert("Sign up successful! Welcome, " + name + " " + surname + "!");
        });
    }

    // Handles login form submission on the login page.
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            console.log("Email:", email);
            console.log("Password:", password);

            window.location.href = "user-page.html";
        });
    }

    // Handles dream journal functionality and streak tracking.
    const dreamForm = document.getElementById("dreamJournalForm");
    const dreamList = document.getElementById("dreamList");
    const addImageButton = document.getElementById("addImage");
    const currentStreakEl = document.getElementById("currentStreak");
    const bestStreakEl = document.getElementById("bestStreak");
    const lastEntryDateEl = document.getElementById("lastEntryDate");
    const dreamLevelEl = document.getElementById("dreamLevel");
    const dreamXpEl = document.getElementById("dreamXp");
    const xpFillEl = document.getElementById("xpFill");
    const nextRewardEl = document.getElementById("nextReward");
    const badge3El = document.getElementById("badge3");
    const badge7El = document.getElementById("badge7");
    const badge14El = document.getElementById("badge14");
    const streakStorageKey = "afterlightStreakData";

    function getTodayKey() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function parseDateKey(dateKey) {
        const parts = dateKey.split("-").map(Number);
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    function getDayDifference(fromDateKey, toDateKey) {
        const fromDate = parseDateKey(fromDateKey);
        const toDate = parseDateKey(toDateKey);
        const msPerDay = 1000 * 60 * 60 * 24;
        return Math.round((toDate - fromDate) / msPerDay);
    }

    function loadStreakData() {
        const defaultData = {
            currentStreak: 0,
            bestStreak: 0,
            lastEntryDate: "",
        };

        try {
            const rawData = localStorage.getItem(streakStorageKey);
            if (!rawData) {
                return defaultData;
            }

            const parsed = JSON.parse(rawData);
            return {
                currentStreak: Number(parsed.currentStreak) || 0,
                bestStreak: Number(parsed.bestStreak) || 0,
                lastEntryDate: parsed.lastEntryDate || "",
            };
        } catch (error) {
            return defaultData;
        }
    }

    function saveStreakData(streakData) {
        localStorage.setItem(streakStorageKey, JSON.stringify(streakData));
    }

    function renderStreakData(streakData) {
        if (!currentStreakEl || !bestStreakEl || !lastEntryDateEl) {
            return;
        }

        currentStreakEl.textContent = String(streakData.currentStreak);
        bestStreakEl.textContent = String(streakData.bestStreak);
        lastEntryDateEl.textContent = streakData.lastEntryDate || "No entries yet";

        const dreamLevel = Math.floor(streakData.bestStreak / 3) + 1;
        const xpInLevel = streakData.currentStreak % 5;
        const xpGoal = 5;
        const xpPercent = (xpInLevel / xpGoal) * 100;

        if (dreamLevelEl) {
            dreamLevelEl.textContent = String(dreamLevel);
        }

        if (dreamXpEl) {
            dreamXpEl.textContent = `${xpInLevel} / ${xpGoal}`;
        }

        if (xpFillEl) {
            xpFillEl.style.width = `${xpPercent}%`;
        }

        if (nextRewardEl) {
            if (streakData.currentStreak < 3) {
                nextRewardEl.textContent = "3-day streak badge";
            } else if (streakData.currentStreak < 7) {
                nextRewardEl.textContent = "7-day streak badge";
            } else if (streakData.currentStreak < 14) {
                nextRewardEl.textContent = "14-day streak badge";
            } else {
                nextRewardEl.textContent = "All starter badges unlocked";
            }
        }

        function updateBadgeState(badgeEl, unlocked) {
            if (!badgeEl) {
                return;
            }
            badgeEl.classList.remove("locked", "unlocked");
            badgeEl.classList.add(unlocked ? "unlocked" : "locked");
        }

        updateBadgeState(badge3El, streakData.bestStreak >= 3);
        updateBadgeState(badge7El, streakData.bestStreak >= 7);
        updateBadgeState(badge14El, streakData.bestStreak >= 14);
    }

    function registerDreamForStreak() {
        const streakData = loadStreakData();
        const todayKey = getTodayKey();

        if (!streakData.lastEntryDate) {
            streakData.currentStreak = 1;
        } else {
            const dayDifference = getDayDifference(streakData.lastEntryDate, todayKey);
            if (dayDifference === 1) {
                streakData.currentStreak += 1;
            } else if (dayDifference > 1) {
                streakData.currentStreak = 1;
            }
        }

        streakData.lastEntryDate = todayKey;
        streakData.bestStreak = Math.max(streakData.bestStreak, streakData.currentStreak);

        saveStreakData(streakData);
        renderStreakData(streakData);
    }

    if (dreamList) {
        const dreams = [
            "I was flying over a beautiful landscape.",
            "I was being chased by a mysterious figure.",
            "I found myself in a magical forest.",
            "I walked through a city where the sky was filled with lanterns.",
            "I kept opening doors that led to different versions of my childhood home.",
            "I was swimming underwater and could breathe like it was completely normal.",
            "I heard a song in my dream that I have never heard before.",
            "I was late for a test, but the classroom was on top of a mountain.",
        ];

        if (dreamList.children.length === 0) {
            dreams.forEach(function (dream) {
                const listItem = document.createElement("li");
                listItem.textContent = dream;
                dreamList.appendChild(listItem);
            });
        }
    }

    if (dreamForm && dreamList) {
        renderStreakData(loadStreakData());

        dreamForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const dreamTitle = document.getElementById("dreamTitle").value.trim();
            const dreamDetails = document.getElementById("dreamDetails").value.trim();

            if (!dreamDetails) {
                return;
            }

            const listItem = document.createElement("li");
            listItem.textContent = dreamTitle ? `${dreamTitle}: ${dreamDetails}` : dreamDetails;
            dreamList.appendChild(listItem);

            registerDreamForStreak();

            dreamForm.reset();
            alert("Dream submitted successfully!");
        });
    }

    if (addImageButton) {
        addImageButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Add Image button clicked!");
            alert("Add Image functionality is not implemented yet.");
        });
    }
});

