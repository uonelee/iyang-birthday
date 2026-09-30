// ==================== PAGE NAVIGATION ====================

function nextPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const next = document.getElementById(pageId);

  if (next) {
    next.classList.add("active");
    window.scrollTo(0, 0);
  }
}


// ==================== GIFT OPENING ====================

const giftButton = document.getElementById("giftButton");
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

if (giftButton) {
  giftButton.addEventListener("click", function () {

    nextPage("giftReveal");

    setTimeout(() => {
      giftBox.classList.add("open");

      setTimeout(() => {
        giftMessage.classList.add("show");
      }, 800);

    }, 500);

  });
}


// ==================== MESSAGE GROUPS ====================

function showMessageGroup(group) {

  const familyGroup = document.getElementById("familyGroup");
  const friendsGroup = document.getElementById("friendsGroup");
  const individualLetter = document.getElementById("individualLetter");
  const messageChoice = document.getElementById("messageChoice");

  // Hide individual letter
  individualLetter.classList.remove("show");

  // Show main choices
  messageChoice.style.display = "flex";

  // Hide both groups
  familyGroup.classList.remove("show");
  friendsGroup.classList.remove("show");

  // Show selected group
  if (group === "family") {
    familyGroup.classList.add("show");
  }

  if (group === "friends") {
    friendsGroup.classList.add("show");
  }
}


// ==================== LETTER DATA ====================

const names = {

  me: "from me 🦭♡",

  ate: "ate",

  soul: "soul",

  eros: "eros",

  margaux: "margaux",

  titaMeng: "tita meng",

  giff: "giff",

  lyle: "lyle"

};


const messages = {

  // ==================== FROM ME ====================

  me: `dear iyang,

happy birthday, my iyang ♡

i don't really know how to put everything i feel into words, but i just want you to know how thankful i am for you. after everything we've been through, all the good moments, random laughs, small fights, and everything in between, i'm still grateful that i got to meet you and have you in my life.

i love all the little things about you. your smile, your personality, your creativity, your patience, and even the random things you do that somehow make me smile. i don't always say it properly, but i notice and appreciate more than you probably know.

i know i'm not perfect, and i know there are things i still need to learn and improve. but i'm thankful for all the moments we've shared and for everything you've taught me along the way.

today is your day, so i hope you enjoy every little part of it. i hope this new year of your life brings you more happiness, good memories, and things that make you proud of yourself.

thank you for being you, iyang.

happy 17th birthday. i love you always. ♡

— me 🦭`,


  // ==================== ATE ====================

  ate: `happiest birthday, yanna !

wishing u a good year ahead. i hope u get to achieve all the things ure aiming for and that things work out for u the way u want them to.

i hope u get to experience more good things, meet good people, and just have more reasons to be happy this year kasi u deserve all of that.

i may not always say it or show it, but please know that i do love u and i’m always rooting for u in my own way.

and pls remember that ur more than enough, so don’t be too hard on urself.

enjoy ur day ok !`,


  // ==================== SOUL ====================

  soul: `Happiest 17th birthday to the sweetest girl that surfaced from the horizon!

On this special day, the world was given a blessing to meet someone like you. A strong independent girl, raised to be a shoulder to anyone that's hurt.

You taught us how resiliency and vulnerability can co-exist together without creating chaos between them. You taught us how emotions are as important as any warning of a tide or a storm.

And most especially, you taught us how forgiveness can change one's heart.

With this celebration that expresses your gratefulness, we all may remind you that you are loved forever by those you know and may not know.

This world loves your smile and your heart, and we hope you have a blessed day.`,


  // ==================== EROS ====================

  eros: `Happiest 17th Birthday cousin my love!

Kamusta ka ba jan sa manila, ingat ka baka ma gripuhan ka jan! Mag kita naman tayo cousin tagal na natin di nag kikita miss na miss na kita, parang dati lang araw araw tayo nag kikita ngayon kung mag kita tayo iisang beses nalang sa dalawang buwan.

Namimiss na kita awayin araw araw kasi parang hindi nabubuo yung araw ko sa school kapag hindi ka napipikon e.

Alam ko madalas din tayo mag karoon ng hindi pag kakasunduan pero kahit na ganun, lagi pa rin kita hinahanap kela kambal kasi bukod sa bonding natin gustong gusto lang talaga kita kasama kasi parang ang gaan ng paligid kapag kasama kita, good vibes lang palagi puro ig reels saka memes sa tiktok.

Gusto ko lang rin mag sorry sayo kung pa-minsan sobrang unfair ng mundo sayo, ang dami mong problema tapos madalas ka pa mag isa sa bahay niyo, alam mo naman yun be na one call away lang ako kung kailangan mo kagaguhan basta tawag ka lang at ready ako kumain ng pancit canton sa bahay niyo habang nag chichismisan.

I love you so much be alam mo yan hindi enough ang words kung gaano kita naaappreciate ng sobra lam mo yan!!!!

Yun lang naman hindi ko na papahabain, love you so much cousin my love miss na miss na miss na miss na kita sobra i love be ingat ka jan mag kita na tayooooo!!!

Happy Birthdih 🥰😘😍🫶🎉😝🎊🥳`,


  // ==================== MARGAUX ====================

  margaux: `happy birthday, iyang! ♡

i hope you have a really nice birthday and enjoy your special day.

wishing you more happiness, good memories, and blessings in this new chapter of your life.

always take care of yourself and remember that you are loved.

enjoy your day! ♡`,


  // ==================== TITA MENG ====================

  titaMeng: `happy 17th birthday, iyang! ♡

wishing you a happy and meaningful birthday.

may you continue to grow into the person you want to become and may you always be surrounded by people who care about you.

enjoy your special day and always take care! ♡`,


  // ==================== GIFF ====================

  giff: `To my Numbawan Bestfriend!

Wala na, naiiyak na ako! (Joke!). Kidding aside, ang tanda mo na pala be HAHAHA (joke uli).

Seriously though, I just wanted to take a moment to greet you the happiest and loudest birthday! 🎊🧁

Looking back at everything we’ve been through, I am just so grateful that the universe made our paths cross.

I remember nung first quarter ng grade 9 ang sabe mo sakin binilin ako sayo ni chloe kaya lagi mo din akong sinasamahan and that made me in an awe kasi hindi mo naman ako sasamahan just because binilin — but, gusto mo din naman i guess hwaha.

Well anw, thank you for everything!

You aren't just my best friend — you’re my chosen sister, my hype woman (pag tumawa kala mo may hika), and the person who knows all my secrets (like legit 100% trusted bruh!).

Thank you for your endless patience, sa nakakahawang tawa, sa small chikahans natin sa UST, sa pagiging seatmate ko sa bus, and for always being there through the highest highs or either the lowest lows.

As you step into this new chapter of your life, I pray that all your heart's deepest desires come true.

You deserve every single ounce of happiness, success, and love this world has to offer.

Never ever forget how amazing, strong, and beautiful you are — inside and out.

No matter where life takes us (knowing na nasa mnl ka na rn) I’ll always be right here cheering you on and give you the comfort/advices you needed.

I’ve always thank God that I have this type of friendship that makes life worth it.

Happiest Birthday, Dianna! 🥂

enjoy your day and i love you as always. 🌷🩷

lovelots, gip:)`,


  // ==================== LYLE ====================

  lyle: `happii 17th, yangg !!

another step closer to reaching unc.

i’m genuinely so glad to have become friends with u.

you’re such a silly person to be around, and I hope you never lose that little thing that makes you who you are.

may today bring you lots of love, laughter, n robux.

let’s hope we get the chance to slime n raid ugly e boys at da hood again :pp

i miss you lots and i’m really happy you’re one of the people I get to call my friend, we luv u so muchie !!`

};


// ==================== OPEN A LETTER ====================

function openLetter(person) {

  const messageChoice = document.getElementById("messageChoice");
  const familyGroup = document.getElementById("familyGroup");
  const friendsGroup = document.getElementById("friendsGroup");
  const individualLetter = document.getElementById("individualLetter");

  const letterName = document.getElementById("letterName");
  const letterContent = document.getElementById("letterContent");

  // Hide main choices
  messageChoice.style.display = "none";

  // Hide groups
  familyGroup.classList.remove("show");
  friendsGroup.classList.remove("show");

  // Set name
  letterName.textContent = names[person] || "a message for you ♡";

  // Set message
  letterContent.textContent = messages[person] || "message coming soon ♡";

  // Show letter
  individualLetter.classList.add("show");

  // Scroll to the letter
  setTimeout(() => {
    individualLetter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
}


// ==================== BACK TO MESSAGE CHOICES ====================

function backToMessages() {

  const messageChoice = document.getElementById("messageChoice");
  const familyGroup = document.getElementById("familyGroup");
  const friendsGroup = document.getElementById("friendsGroup");
  const individualLetter = document.getElementById("individualLetter");

  // Hide letter
  individualLetter.classList.remove("show");

  // Hide groups
  familyGroup.classList.remove("show");
  friendsGroup.classList.remove("show");

  // Show main choices
  messageChoice.style.display = "flex";

  // Scroll back to the choices
  setTimeout(() => {
    messageChoice.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100);
}
