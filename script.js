const vocab8 = ['Cardboard', 'Susceptible', 'Counterpart', 'Meagre', 'Bedridden', 'Savings', 'Assets', 'Alleviate', 'Eligible', 'Inevitable', 'Mandatory', 'Supposedly', 'Retirees', 'Advocates', 'Solely', 'Volatile', 'Universal', 'Proposition', 'Controversial', 'Alternatively', 'Fiscal', 'Deplete', 'Allowances', 'Distinctive', 'Dwindle', 'Roam', 'Pavilion', 'Amid', 'Vegetation', 'Comprise', 'Flare', 'Urn', 'Columbarium', 'Halt', 'Designate', 'Undoubtedly', 'Skyrocket', 'Ridiculousness', 'Cramped', 'Cubicle', 'Slum', 'Dweller', 'Mortgage', 'Institute', 'Tackle', 'Reclaim', 'Exorbitant', 'Consistently', 'Earmark', 'Grants', 'Prospects', 'Incentives', 'Welfare', 'Dependent', 'Lifeblood', 'Vulnerable', 'Destitution', 'mentor', 'stereotypes', 'raffle', 'eradicate', 'nominal', 'publicity', 'transient', 'hospitality', 'sceptical', 'skeptical', 'drastic', 'dedication', 'precious'];
const vocab = ['Optimize', 'Municipal', 'Pioneer', 'Embed', 'Momentum', 'Vendor', 'Hub', 'Domestic', 'Scatter', 'Contemporary', 'Ventilation', 'Presumably', 'Problematic', 'Scrutinize', 'Swiftly', 'Accelerate', 'Retain', 'Diner', 'Conscientious', 'Bypass', 'Ostensible', 'Normalize', 'Accidental', 'Homogeneous', 'Cohort', 'Conceive', 'Assimilate', 'Legitimately', 'Placement', 'Foster', 'Literally', 'Thoughtless', 'Disinclined', 'Gratification', 'Transpire', 'Refine', 'Pre-emptive', 'Reassuring', 'Sarcastic', 'Authentication', 'Implement', 'Infrastructure', 'Ample', 'Embrace', 'Hiccups', 'Foolproof', 'Rollout', 'Gingerly', 'Complement', 'Compliment', 'Resurface', 'Illustrate', 'Periodically', 'Outsource', 'Police', 'Hefty', 'Fines', 'Fancy', 'Autonomous', 'Classify', 'Sentiment', 'Collaborator', 'Burnout', 'Dodgy', 'Unalloyed', 'Accomplish', 'Replacement', 'Centralize', 'Hype', 'Compatible', 'collectibles', 'Sentence', 'Forfeit', 'Lifetime', 'Tarnish', 'Culpability', 'Unscrupulous', 'Haphazard', 'Forward-thinking', 'Slum', 'Billboards', 'Solicit', 'Halt', 'Endorsement', 'Censorship', 'Credible', 'Obscenity', 'Backlash', 'Versatile', 'Breadwinner'];

var once = document.getElementById("onceInput");
var openBtn = document.getElementById("openBtn");
var contBtn = document.getElementById('contBtn');


var alreadyU7 = 0;
var alreadyU8 = 0;
var cont = true;

function pauseOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }


openBtn.addEventListener('click',async function(){
    if(once.value === ""){
        once = 10;
    } else if(once.value != ""){
        once = parseInt(once.value,10);
    }
    const ADD = once;
    while (alreadyU7 <= 89 && cont === true){
        window.open("https://dictionary.cambridge.org/dictionary/english-chinese-traditional/" + vocab[alreadyU7], target="_blank");
        await pauseOneSecond();
        alreadyU7++;
        if (alreadyU7 == once){
            cont = false;
            var askCont = prompt("Type \"c\" to continue.");
            while(askCont === null){
                askCont = prompt("Type \"c\" to continue.");
            }
            if(askCont == "c"){
                cont = true;
                once = once + ADD;
            } else if(askCont == ""){
                return;
            }
        }
    }

    while (alreadyU8 <= 69 && cont === true){
        once = 0;
            window.open("https://dictionary.cambridge.org/dictionary/english-chinese-traditional/" + vocab8[alreadyU8], target="_blank");
            await pauseOneSecond();
            alreadyU8++;
            if (alreadyU8 == once){
                cont = false;
                let askCont = prompt("When ready to continue, Press \"Ok\"", "c");
                if (askCont == "c" || askCont == "C"){
                    cont = true;
                    once = once + ADD;
                }
            }
        }
    }
)