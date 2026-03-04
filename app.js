let num = document.getElementById("num");
let generateBtn = document.getElementById("generateBtn");
let result = document.getElementById("result");
let copyBtn = document.getElementById("copyBtn");
num.addEventListener("input", function(){
    if(num.value.length > 8){
        num.style.width = "150px";
    }
    if(num.value.length > 12){
        num.style.width = "180px";
    }
});
const loremWords = [
    "lorem", "ipsum", "dolor", "sit", "amet",
    "consectetur", "adipiscing", "elit", "sed", "do",
    "eiusmod", "tempor", "incididunt", "ut", "labore"
];
generateBtn.addEventListener("click", function(){
    if(generateBtn.textContent === "Generate it!"){
        result.style.display = "inline-block";
        copyBtn.style.display = "inline-block";
    }
    let text = "";
    const count = parseInt(num.value) || 1;
    
    for (let i = 0; i < count; i++) {
        let index = i % loremWords.length;
        text += loremWords[index] + " ";
    }
    result.textContent = text.trim();
});
copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(result.textContent);
    alert("Text copied to clipboard!");
});