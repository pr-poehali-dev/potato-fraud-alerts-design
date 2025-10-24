import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const scamTypes = [
  {
    id: 1,
    title: "Фишинговые сайты",
    description: "Поддельные сайты, копирующие известные сервисы для кражи данных",
    icon: "Globe",
    color: "bg-[#FF4444]",
    textColor: "text-[#FF4444]",
    details: "Мошенники создают копии популярных сайтов банков, соцсетей, интернет-магазинов. Проверяйте URL-адрес, наличие HTTPS и сертификата безопасности.",
    tips: ["Проверяйте адрес сайта", "Ищите HTTPS", "Не переходите по подозрительным ссылкам"]
  },
  {
    id: 2,
    title: "Телефонное мошенничество",
    description: "Звонки от якобы сотрудников банков, полиции или других организаций",
    icon: "Phone",
    color: "bg-[#FF6B35]",
    textColor: "text-[#FF6B35]",
    details: "Мошенники представляются сотрудниками банков, просят сообщить данные карты или код из СМС. Настоящие банки никогда не запрашивают эту информацию.",
    tips: ["Не сообщайте коды из СМС", "Перезвоните в банк сами", "Не переводите деньги на 'безопасный счет'"]
  },
  {
    id: 3,
    title: "Поддельные магазины",
    description: "Интернет-магазины с невероятно низкими ценами, которые исчезают после оплаты",
    icon: "ShoppingCart",
    color: "bg-[#FFD700]",
    textColor: "text-[#FFD700]",
    details: "Сайты-однодневки предлагают товары по очень низким ценам, берут предоплату и исчезают. Проверяйте отзывы и срок существования магазина.",
    tips: ["Проверяйте отзывы покупателей", "Смотрите на дату создания сайта", "Избегайте 100% предоплаты"]
  },
  {
    id: 4,
    title: "Фейковые инвестиции",
    description: "Предложения инвестировать с гарантированной высокой доходностью",
    icon: "TrendingUp",
    color: "bg-[#FF4444]",
    textColor: "text-[#FF4444]",
    details: "Обещания быстрого заработка, инвестиции в криптовалюту с гарантией 300% дохода - признаки мошенничества. Нет гарантированной высокой доходности.",
    tips: ["Проверяйте лицензию компании", "Не верьте обещаниям сверхприбыли", "Консультируйтесь с финансистами"]
  },
  {
    id: 5,
    title: "Социальная инженерия",
    description: "Манипуляции людьми для получения конфиденциальной информации",
    icon: "Users",
    color: "bg-[#FF6B35]",
    textColor: "text-[#FF6B35]",
    details: "Мошенники входят в доверие через соцсети, знакомства, создают срочные ситуации. Просят помочь деньгами или получить доступ к аккаунтам.",
    tips: ["Не доверяйте незнакомцам в сети", "Проверяйте информацию из нескольких источников", "Не спешите с решениями"]
  },
  {
    id: 6,
    title: "Вредоносное ПО",
    description: "Программы, которые крадут данные или блокируют доступ к компьютеру",
    icon: "Bug",
    color: "bg-[#FFD700]",
    textColor: "text-[#FFD700]",
    details: "Вирусы-шифровальщики, трояны для кражи паролей, шпионские программы. Устанавливаются через поддельные обновления, пиратское ПО.",
    tips: ["Используйте антивирус", "Не скачивайте файлы из ненадежных источников", "Делайте резервные копии данных"]
  }
];

export default function Index() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary text-primary-foreground px-6 py-2 text-lg font-bold">
            ⚠️ ВНИМАНИЕ
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Защита от <span className="text-primary">интернет-мошенников</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            6 основных видов мошенничества в интернете и как от них защититься. 
            Будьте бдительны и сохраняйте свои данные в безопасности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scamTypes.map((scam, index) => (
            <Card 
              key={scam.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                selectedCard === scam.id ? 'border-primary shadow-2xl scale-105' : 'border-border'
              }`}
              onClick={() => setSelectedCard(selectedCard === scam.id ? null : scam.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`${scam.color} p-4 rounded-2xl`}>
                    <Icon name={scam.icon} size={32} className="text-white" />
                  </div>
                  <Badge className={`${scam.color} text-white font-bold`}>
                    #{scam.id}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold mb-2 text-foreground">
                  {scam.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground font-medium">
                  {scam.description}
                </CardDescription>
              </CardHeader>
              
              {selectedCard === scam.id && (
                <CardContent className="animate-accordion-down">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-foreground leading-relaxed">
                        {scam.details}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className={`font-bold mb-3 flex items-center gap-2 ${scam.textColor}`}>
                        <Icon name="Shield" size={20} />
                        Как защититься:
                      </h4>
                      <ul className="space-y-2">
                        {scam.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Icon name="CheckCircle2" size={16} className={scam.textColor} />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <Card className="bg-primary text-primary-foreground border-none">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-full">
                <Icon name="ShieldCheck" size={48} className="text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold mb-4">
              Общие правила безопасности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur">
                <Icon name="Lock" size={24} className="text-white flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Используйте сложные пароли</h4>
                  <p className="text-sm opacity-90">Разные пароли для разных сервисов, минимум 12 символов</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur">
                <Icon name="Smartphone" size={24} className="text-white flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Двухфакторная аутентификация</h4>
                  <p className="text-sm opacity-90">Подключайте 2FA везде, где это возможно</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur">
                <Icon name="Eye" size={24} className="text-white flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Будьте внимательны</h4>
                  <p className="text-sm opacity-90">Проверяйте отправителя писем и СМС, URL-адреса сайтов</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-white/10 rounded-lg backdrop-blur">
                <Icon name="AlertTriangle" size={24} className="text-white flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Не спешите</h4>
                  <p className="text-sm opacity-90">Мошенники создают искусственную срочность. Перепроверьте информацию</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
