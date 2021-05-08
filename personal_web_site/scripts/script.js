const ESP_LAN = "esp", ENG_LAN = "eng";
const SPEED_ANIMATION = "slow";
const PROFILE_TEXT = ".text-profile";
const PROFILE_MAIL = "#contact-mail";
const BTN_ESP = "#spanish-lan", BTN_ENG = "#english-lan";
const BTN_MAIL = "#show-mail";
let activeLan = ESP_LAN;
let visibleMail = false;

// By default the profile text language is spanish
$(PROFILE_TEXT).text(profileTextEsp);
// Set the mail
$(PROFILE_MAIL).text(profileMail);

// Allows to change the language
$(BTN_ESP).click(()=>{
    if(activeLan != ESP_LAN){
        $(PROFILE_TEXT).fadeOut(SPEED_ANIMATION, ()=>$(PROFILE_TEXT).text(profileTextEsp));
        $(PROFILE_TEXT).fadeIn(SPEED_ANIMATION);
        activeLan = ESP_LAN;
    }
})

$(BTN_ENG).click(()=>{
    if(activeLan != ENG_LAN){
        $(PROFILE_TEXT).fadeOut(SPEED_ANIMATION, ()=>$(PROFILE_TEXT).text(profileTextEng));
        $(PROFILE_TEXT).fadeIn(SPEED_ANIMATION);
        activeLan = ENG_LAN;
    }
})

// Shows the contact mail when the icon is clicked
$(BTN_MAIL).click(()=>{
    if($("#contact-mail").hasClass("hidden")){
        $("#contact-mail").removeClass("hidden").addClass("visible");
    }
    else{
        $("#contact-mail").removeClass("visible").addClass("hidden");
    }
})