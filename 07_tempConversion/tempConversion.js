const ftoc = function(ftemp) {
   if (ftemp == 32) return 0;
   return Math.round(( (5/9) * (ftemp - 32) ) * 10) / 10;
};

const ctof = function(ctemp) {
   if (ctemp == 0) return 32;
   return  Math.round(( (ctemp * 9/5) + 32 ) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
