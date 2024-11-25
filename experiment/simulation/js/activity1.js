let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">To find the density of stone</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function internal_calculation1() {
    w_air = 0;
    w_water = 0;
    w = 0;
    V = 0;
    M = 0;
    den_stone = 0;
    sp_gra = 0;
    w_air = random1(390, 401);
    w_water = random1(190, 201);
    w = w_air - w_water;
    V = parseFloat((w / (1000 * g)).toFixed(3));
    M = parseFloat((w_air / g).toFixed(3));
    den_stone = parseFloat((M / V).toFixed(3));
    sp_gra = parseFloat((den_stone / 1000).toFixed(3));
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <p style="text-align:left;">
         A stone weighs ${w_air}N  in air and ${w_water}N in water.
      </p>
      <p style="text-align:left;">
         Find the volume of the stone and its specific gravity.
      </p>
      <br>
      <div class="row justify-content-center">
         <p class="col-md-6">
            weight of stone in air = ${w_air} N  
         </p>
         <p class="col-md-6">
            weight of stone in water  = ${w_water} N
         </p>
      </div>
      <p style="text-align:left;">
         For equilibrium,
      </p>
      <p>
         weight of water displaced(w) = weight of stone in air - weight of stone in water
      </p>
      <div id="act1-water-displaced-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               weight of water displaced(w) = 
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-wtr-dspl-inp' class='form-control fs-16px' /> <span style="display:contents;">N
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_w_water_displaced();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function verify_w_water_displaced() {
    let inp = (document.getElementById('act1-wtr-dspl-inp'));
    console.log(w);
    if (!verify_values(parseFloat(inp.value), w)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-water-displaced-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         weight of water displaced(w) = ${w}N
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='load_v1_div();'>Next</button>
   `;
}
function load_v1_div() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p>
      w = volume of water displaced &times; &rho;<sub>w</sub>g
   </p>
   <div id="act1-vol1-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-5">
            $$ volume \\ of \\ water \\ displaced = \\frac{w}{\ρ_wg} =$$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-v1-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup></span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_v1();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_v1() {
    let inp = (document.getElementById('act1-v1-inp'));
    console.log(V);
    if (!verify_values(parseFloat(inp.value), V)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-vol1-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
         volume \\ of \\ water \\ displaced = \\frac{w}{\ρ_wg} = ${V} \\ m^3
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn2" onclick='load_v2_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_v2_div() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Volume of stone (V)
   </p>
   <div id="act1-vol2-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-5">
            $$V =  volume \\ of \\ water \\ displaced = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-v2-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>3</sup></span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_v2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_v2() {
    let inp = (document.getElementById('act1-v2-inp'));
    console.log(V);
    if (!verify_values(parseFloat(inp.value), V)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-vol2-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            V =  volume \\ of \\ water \\ displaced = ${V} \\ m^3
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn3" onclick='load_mass_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_mass_div() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Mass of stone (M)
   </p>
   <div id="act1-mass-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-5">
            $$M =  \\frac{weight \\ of \\ stone \\ in \\ air}{g} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-m-inp' class='form-control fs-16px' /> <span style="display:contents;">kg</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_m();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_m() {
    let inp = (document.getElementById('act1-m-inp'));
    console.log(M);
    if (!verify_values(parseFloat(inp.value), M)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-mass-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            M =  \\frac{weight \\ of \\ stone \\ in \\ air}{g} = ${M} \\ kg
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn4" onclick='load_density_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_density_div() {
    let btn = (document.getElementById('act1-btn4'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Density of stone (&rho;<sub>s</sub>)
   </p>
   <div id="act1-density-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$\ρ_s =  \\frac{M}{V} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-density-inp' class='form-control fs-16px' /> <span style="display:contents;">kg/m<sup>3</sup></span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_density();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_density() {
    let inp = (document.getElementById('act1-density-inp'));
    console.log(den_stone);
    if (!verify_values(parseFloat(inp.value), den_stone)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-density-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
         \ρ_s =  \\frac{M}{V} = ${den_stone} \\ kg/m^3
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn5" onclick='load_specific_gravity_div();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_specific_gravity_div() {
    let btn = (document.getElementById('act1-btn5'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">
      Specific gravity of stone
   </p>
   <div id="act1-spec-grav-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$Specific \\ gravtiy =  \\frac{\ρ_s}{\ρ_w} = $$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-spec-grav-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_specific_gravity();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_specific_gravity() {
    let inp = (document.getElementById('act1-spec-grav-inp'));
    console.log(sp_gra);
    if (!verify_values(parseFloat(inp.value), sp_gra)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-spec-grav-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            Specific \\ gravtiy =  \\frac{\ρ_s}{\ρ_w} = ${sp_gra}
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn6" onclick='exp_complete();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function exp_complete() {
    let btn = document.getElementById('act1-btn6');
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map