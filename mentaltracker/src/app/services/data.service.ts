import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  maximalValues = [13, 19, 28, 63];
  maximalValue = 63;
  systemAnswersByValues = [
    "0–13 — вариации, считающиеся нормой",
    "14–19 — лёгкая депрессия",
    "20–28 — умеренная депрессия",
    "29–63 — тяжёлая депрессия"
  ];
  matrixOfAnswers = [
    [
      {
        content: "Я не чувствую себя расстроенным, печальным",
        score: 0,
        selected: false
      },
      {
        content: "Я расстроен",
        score: 1,
        selected: false
      },
      {
        content: "Я все время расстроен и не могу от этого отключиться",
        score: 2,
        selected: false
      },
      {
        content: "Я настолько расстроен и несчастлив, что не могу это выдержать",
        score: 3,
        selected: false
      }
    ],
    [
      { content: "Я не тревожусь о своем будущем", score: 0, selected: false },
      { content: "Я чувствую, что озадачен будушим", score: 1, selected: false },
      {
        content: "Я чувствую, что меня ничего не ждет в будущем",
        score: 2,
        selected: false
      },
      {
        content: "Мое будущее безнадежно, и ничто не может измениться к лучшему",
        score: 3,
        selected: false
      }
    ],
    [
      { content: "Я не чувствую себя неудачником", score: 0, selected: false },
      {
        content: "Я чувствую, что терпел больше неудач, чем другие люди",
        score: 1,
        selected: false
      },
      {
        content: "Когда я оглядываюсь на свою жизнь, я вижу в ней много неудач",
        score: 2,
        selected: false
      },
      {
        content: "Я чувствую, что как личность я - полный неудачник",
        score: 3,
        selected: false
      }
    ],
    [
      {
        content: "Я получаю столько же удовлетворения от жизни, как раньше",
        score: 0,
        selected: false
      },
      {
        content: "Я не получаю столько же удовлетворения от жизни, как раньше",
        score: 1,
        selected: false
      },
      {
        content: "Я больше не получаю удовлетворения ни от чего",
        score: 2,
        selected: false
      },
      {
        content: "Я полностью не удовлетворен жизнью и мне все надоело",
        score: 3,
        selected: false
      }
    ],
    [
      {
        content: "Я не чувствую себя в чем-нибудь виноватым",
        score: 0,
        selected: false
      },
      {
        content: "Достаточно часто я чувствую себя виноватым",
        score: 1,
        selected: false
      },
      {
        content: "Большую часть времени я чувствую себя виноватым",
        score: 2,
        selected: false
      },
      { content: "Я постоянно испытываю чувство вины", score: 3, selected: false }
    ],
    [
      {
        content: "Я не чувствую, что могу быть наказанным за что-либо",
        score: 0,
        selected: false
      },
      { content: "Я чувствую, что могу быть наказан", score: 1, selected: false },
      { content: "Я ожидаю, что могу быть наказан", score: 2, selected: false },
      { content: "Я чувствую себя уже наказанным", score: 3, selected: false }
    ],
    [
      { content: "Я не разочаровался в себе", score: 0, selected: false },
      { content: "Я разочаровался в себе", score: 1, selected: false },
      { content: "Я себе противен", score: 2, selected: false },
      { content: "Я себя ненавижу", score: 3, selected: false }
    ],
    [
      { content: "Я знаю, что я не хуже других", score: 0, selected: false },
      {
        content: "Я критикую себя за ошибки и слабости",
        score: 1,
        selected: false
      },
      {
        content: "Я все время обвиняю себя за свои поступки",
        score: 2,
        selected: false
      },
      {
        content: "Я виню себя во всем плохом, что происходит",
        score: 3,
        selected: false
      }
    ],
    [
      {
        content: "Я никогда не думал покончить с собой",
        score: 0,
        selected: false
      },
      {
        content:
          "Ко мне приходят мысли покончить с собой, но я не буду их осуществлять",
        score: 1,
        selected: false
      },
      { content: "Я хотел бы покончить с собой", score: 2, selected: false },
      {
        content: "Я бы убил себя, если бы представился случай",
        score: 3,
        selected: false
      }
    ],
    [
      { content: "Я плачу не больше, чем обычно", score: 0, selected: false },
      { content: "Сейчас я плачу чаще, чем раньше", score: 1, selected: false },
      { content: "Теперь я все время плачу", score: 2, selected: false },
      {
        content: "Раньше я мог плакать, а сейчас не могу, даже если мне хочется",
        score: 3,
        selected: false
      }
    ],
    [
      {
        content: "Сейчас я раздражителен не более, чем обычно",
        score: 0,
        selected: false
      },
      {
        content: "Я более легко раздражаюсь, чем раньше",
        score: 1,
        selected: false
      },
      {
        content: "Теперь я постоянно чувствую, что раздражен",
        score: 2,
        selected: false
      },
      {
        content: "Я стал равнодушен к вещам, которые меня раньше раздражали",
        score: 3,
        selected: false
      }
    ],
    [
      {
        content: "Я не утратил интереса к другим людям",
        score: 0,
        selected: false
      },
      {
        content: "Я меньше интересуюсь другими людьми, чем раньше",
        score: 1,
        selected: false
      },
      {
        content: "Я почти потерял интерес к другим людям",
        score: 2,
        selected: false
      },
      {
        content: "Я полностью утратил интерес к другим людям",
        score: 3,
        selected: false
      }
    ],
    [
      {
        content: "Я откладываю принятие решения иногда, как и раньше",
        score: 0,
        selected: false
      },
      {
        content: "Я чаще, чем раньше, откладываю принятие решения",
        score: 1,
        selected: false
      },
      {
        content: "Мне труднее принимать решения, чем раньше",
        score: 2,
        selected: false
      },
      { content: "Я больше не могу принимать решения", score: 3, selected: false }
    ],
    [
      {
        content: "Я не чувствую, что выгляжу хуже, чем обычно",
        score: 0,
        selected: false
      },
      {
        content: "Меня тревожит, что я выгляжу старым и непривлекательным",
        score: 1,
        selected: false
      },
      {
        content:
          "Я знаю, что в моей внешности произошли существенные изменения, делающие меня непривлекательным",
        score: 2,
        selected: false
      },
      { content: "Я знаю, что выгляжу безобразно", score: 3, selected: false }
    ],
    [
      {
        content: "Я могу работать так же хорошо, как и раньше",
        score: 0,
        selected: false
      },
      {
        content:
          "Мне необходимо сделать дополнительное усилие, чтобы начать делать что-нибудь",
        score: 1,
        selected: false
      },
      {
        content: "Я с трудом заставляю себя делать что-либо",
        score: 2,
        selected: false
      },
      {
        content: "Я совсем не могу выполнять никакую работу",
        score: 3,
        selected: false
      }
    ],
    [
      {
        content: "Я сплю так же хорошо, как и раньше",
        score: 0,
        selected: false
      },
      { content: "Сейчас я сплю хуже, чем раньше", score: 1, selected: false },
      {
        content: "Я просыпаюсь на 1-2 часа раньше, и мне трудно заснуть опять",
        score: 2,
        selected: false
      },
      {
        content:
          "Я просыпаюсь на несколько часов раньше обычного и больше не могу заснуть",
        score: 3,
        selected: false
      }
    ],
    [
      { content: "Я устаю не больше, чем обычно", score: 0, selected: false },
      {
        content: "Теперь я устаю быстрее, чем раньше",
        score: 1,
        selected: false
      },
      {
        content: "Я устаю почти от всего, что я делаю",
        score: 2,
        selected: false
      },
      {
        content: "Я не могу ничего делать из-за усталости",
        score: 3,
        selected: false
      }
    ],
    [
      { content: "Мой аппетит не хуже, чем обычно", score: 0, selected: false },
      { content: "Мой аппетит стал хуже, чем раньше", score: 1, selected: false },
      {
        content: "Мой аппетит теперь значительно хуже",
        score: 2,
        selected: false
      },
      { content: "У меня вообще нет аппетита", score: 3, selected: false }
    ],
    [
      {
        content:
          "В последнее время я не похудел или потеря веса была незначительной",
        score: 0,
        selected: false
      },
      {
        content: "За последнее время я потерял более 2 кг",
        score: 1,
        selected: false
      },
      { content: "Я потерял более 5 кг", score: 2, selected: false },
      { content: "Я потерял более 7 кr", score: 3, selected: false }
    ],
    [
      {
        content: "Я беспокоюсь о своем здоровье не больше, чем обычно",
        score: 0,
        selected: false
      },
      {
        content:
          "Меня тревожат проблемы моего физического здоровья, такие, как боли, расстройство желудка, запоры и т.д.",
        score: 1,
        selected: false
      },
      {
        content:
          "Я очень обеспокоен своим физическим состоянием, и мне трудно думать о чем-либо другом",
        score: 2,
        selected: false
      },
      {
        content:
          "Я настолько обеспокоен своим физическим состоянием, что больше ни о чем не могу думать",
        score: 3,
        selected: false
      }
    ],
    [
      {
        content:
          "В последнее время я не замечал изменения своего интереса к сексу",
        score: 0,
        selected: false
      },
      {
        content: "Меня меньше занимают проблемы секса, чем раньше",
        score: 1,
        selected: false
      },
      {
        content:
          "Сейчас я значительно меньше интересуюсь сексуальными проблемами, чем раньше",
        score: 2,
        selected: false
      },
      {
        content: "Я полностью утратил сексуальный интерес",
        score: 3,
        selected: false
      }
    ]
  ];
  matrixOfQuestions = [
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?",
    "Как Вы себя чувствуете сегодня ?"
  ];
  result: ReplaySubject<any> = new ReplaySubject<any>();
  constructor() { }
}
