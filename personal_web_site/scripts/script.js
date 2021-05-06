const ESP_LAN = "esp", ENG_LAN = "eng";
const SPEED_ANIMATION = "slow";
const PROFILE_TEXT = ".text-profile";
const BTN_ESP = "#spanish-lan", BTN_ENG = "#english-lan";
let activeLan = ESP_LAN;

// By default the profile text language is spanish
$(PROFILE_TEXT).text(profileTextEsp);

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