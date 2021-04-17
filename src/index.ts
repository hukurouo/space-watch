
setInterval(() => {
  // 現在時間の取得
  const now = new Date();
  const s = now.getSeconds() + now.getMilliseconds()/1000;
  const m = now.getMinutes() + s/60;
  const h = now.getHours();

  const Hour = String(now.getHours())
  const Min = String(now.getMinutes())
  const Sec = String(now.getSeconds())

  const Day = String(now.getDate())
  const Month = String(now.getMonth()+1)

  function format(num: string){
    if (num.length == 1){
      return "0" + num
    } else {
      return num
    }
  }

  // 時、分、秒を元に角度を計算
  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  const degM = m * (360 / 60);
  const degS = s * (360 / 60);

  // 各要素を取得
  const elementH = <HTMLElement>document.querySelector(".c-clock__hour");
  const elementM = <HTMLElement>document.querySelector(".c-clock__min");
  const elementS = <HTMLElement>document.querySelector(".c-clock__sec");
  const elementW = <HTMLElement>document.querySelector(".watch");
  const elementD = <HTMLElement>document.querySelector(".day");
  elementW.innerHTML = format(Hour) + ":" + format(Min) + ":" + format(Sec);
  elementD.innerHTML = format(Month) + "/" + format(Day)

  // styleを追加
  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 10);