import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Country {
  name: string;
  icon: string;
  description: string;
  history: string;
  culture: string;
  traditions: string[];
  cuisine: string[];
  festivals: string[];
  facts: string[];
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const countries: Country[] = [
    {
      name: 'Япония',
      icon: '🇯🇵',
      description: 'Страна восходящего солнца',
      history: 'Япония имеет более чем 2000-летнюю историю. Страна была изолирована от внешнего мира в течение 200 лет (период Эдо, 1603-1868), что позволило развиться уникальной культуре. После реставрации Мэйдзи в 1868 году Япония стремительно модернизировалась, сохранив традиции.',
      culture: 'Японская культура основана на гармонии, уважении и внимании к деталям. Концепция "ваби-саби" ценит красоту несовершенства. Важны понятия группы, иерархии и сезонности.',
      traditions: ['Чайная церемония', 'Икебана (искусство цветов)', 'Каллиграфия', 'Кимоно', 'Оригами', 'Боевые искусства'],
      cuisine: ['Суши и сашими', 'Рамен', 'Темпура', 'Якитори', 'Мисо-суп', 'Вагаси (сладости)'],
      festivals: ['Ханами (цветение сакуры)', 'Мацури (летние фестивали)', 'О-бон', 'Новый год'],
      facts: ['В Японии более 6800 островов', 'Япония - страна с самой высокой продолжительностью жизни', 'Более 70% территории покрыто горами']
    },
    {
      name: 'Италия',
      icon: '🇮🇹',
      description: 'Колыбель ренессанса',
      history: 'Италия - родина Римской империи, оказавшей огромное влияние на западную цивилизацию. В эпоху Возрождения (XIV-XVI века) Италия стала центром искусства, науки и культуры. Италия объединилась как единое государство только в 1861 году.',
      culture: 'Итальянская культура прославляет искусство, семью и качество жизни ("la dolce vita"). Итальянцы страстны, экспрессивны и ценят красоту во всём. Региональные различия очень сильны - каждая область имеет свои диалекты и традиции.',
      traditions: ['Опера и классическая музыка', 'Католические процессии', 'Паседжата (вечерняя прогулка)', 'Кофе-культура', 'Мода и дизайн'],
      cuisine: ['Паста (более 300 видов)', 'Пицца', 'Ризотто', 'Джелато', 'Просекко и вино', 'Тирамису'],
      festivals: ['Карнавал в Венеции', 'Палио ди Сиена', 'Праздник святых покровителей городов', 'Пасха'],
      facts: ['В Италии 58 объектов ЮНЕСКО - больше, чем в любой другой стране', 'Италия производит больше вина, чем любая другая страна', 'В Италии два независимых государства: Ватикан и Сан-Марино']
    },
    {
      name: 'Индия',
      icon: '🇮🇳',
      description: 'Земля тысячи красок',
      history: 'Индия - одна из древнейших цивилизаций мира с историей более 5000 лет. Родина буддизма и индуизма. Индия была британской колонией до 1947 года, когда обрела независимость благодаря движению Махатмы Ганди.',
      culture: 'Индийская культура невероятно разнообразна - 22 официальных языка, множество религий и традиций. Центральные ценности: семья, духовность, гостеприимство. Цвета, танцы и музыка играют важную роль в повседневной жизни.',
      traditions: ['Йога и медитация', 'Классические танцы (Катхак, Бхаратнатьям)', 'Менди (роспись хной)', 'Аюрведа', 'Свадебные церемонии'],
      cuisine: ['Карри различных видов', 'Тандури', 'Биряни', 'Доса и идли', 'Самоса', 'Чай масала'],
      festivals: ['Дивали (фестиваль огней)', 'Холи (праздник красок)', 'Душера', 'Наваратри', 'Понгал'],
      facts: ['Индия - крупнейшая демократия в мире', 'Шахматы были изобретены в Индии', 'Индия - родина йоги, которой более 5000 лет']
    },
    {
      name: 'Мексика',
      icon: '🇲🇽',
      description: 'Родина древних майя',
      history: 'До прихода испанцев в Мексике процветали великие цивилизации: майя, ацтеки, ольмеки. Испанская колонизация (1521-1821) привела к смешению европейской и индейской культур, создав уникальную мексиканскую идентичность.',
      culture: 'Мексиканская культура - яркое сочетание индейских и испанских традиций. Мексиканцы страстны, общительны и гордятся своим наследием. Семья, музыка и праздники играют центральную роль. День мёртвых показывает уникальное отношение к жизни и смерти.',
      traditions: ['Мариачи (музыка)', 'Луча либре (рестлинг)', 'Пиньята', 'Алтари для умерших', 'Народные ремёсла (алебрихес)'],
      cuisine: ['Тако', 'Гуакамоле', 'Моле', 'Энчилада', 'Тамале', 'Текила и мескаль'],
      festivals: ['День мёртвых', 'Синко де Майо', 'День независимости', 'Гелагетса', 'Посадас (Рождество)'],
      facts: ['Шоколад, кукуруза и томаты родом из Мексики', 'В Мексике 35 объектов ЮНЕСКО', 'Мексика - родина цветной телевизионной системы']
    },
  ];

  const traditions = [
    { title: 'Чайная церемония', country: 'Япония', icon: '🍵' },
    { title: 'Карнавал', country: 'Бразилия', icon: '🎭' },
    { title: 'Холи', country: 'Индия', icon: '🎨' },
    { title: 'Фламенко', country: 'Испания', icon: '💃' },
  ];

  const cuisines = [
    { name: 'Суши', country: 'Япония', icon: '🍣' },
    { name: 'Паста', country: 'Италия', icon: '🍝' },
    { name: 'Тако', country: 'Мексика', icon: '🌮' },
    { name: 'Карри', country: 'Индия', icon: '🍛' },
  ];

  const festivals = [
    { name: 'Ханами', country: 'Япония', season: 'Весна', icon: '🌸' },
    { name: 'Октоберфест', country: 'Германия', season: 'Осень', icon: '🍺' },
    { name: 'Дивали', country: 'Индия', season: 'Осень', icon: '🪔' },
    { name: 'Томатина', country: 'Испания', season: 'Лето', icon: '🍅' },
  ];

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'countries', label: 'Страны', icon: 'Globe' },
    { id: 'traditions', label: 'Традиции', icon: 'Sparkles' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Культуры Мира</h1>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    activeSection === item.id
                      ? 'text-secondary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <section className="relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img
                  src="https://cdn.poehali.dev/projects/ef931551-9cd8-4f55-a9ec-83e6528f3bfd/files/916aa333-0fcb-4f8c-a67f-914f5e7779f0.jpg"
                  alt="World cultures"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="container mx-auto px-4 py-20 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                  Откройте мир культур
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                  Исследуйте богатство традиций, кухни и праздников разных народов планеты
                </p>
                <div className="flex gap-4 justify-center">
                  <Button
                    size="lg"
                    className="gap-2"
                    onClick={() => setActiveSection('countries')}
                  >
                    <Icon name="Compass" size={20} />
                    Начать путешествие
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                    onClick={() => setActiveSection('traditions')}
                  >
                    <Icon name="BookOpen" size={20} />
                    Узнать больше
                  </Button>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 py-16">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                  <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-4">🌍</div>
                      <h3 className="text-4xl font-bold text-secondary mb-2">195+</h3>
                      <p className="text-muted-foreground">Стран мира</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-4">🎭</div>
                      <h3 className="text-4xl font-bold text-secondary mb-2">1000+</h3>
                      <p className="text-muted-foreground">Традиций</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-4">🍜</div>
                      <h3 className="text-4xl font-bold text-secondary mb-2">500+</h3>
                      <p className="text-muted-foreground">Блюд</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                    <CardContent className="pt-6">
                      <div className="text-4xl mb-4">🎉</div>
                      <h3 className="text-4xl font-bold text-secondary mb-2">300+</h3>
                      <p className="text-muted-foreground">Праздников</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'countries' && !selectedCountry && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Страны мира</h2>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                <img
                  src="https://cdn.poehali.dev/projects/ef931551-9cd8-4f55-a9ec-83e6528f3bfd/files/e83baac5-8a25-467a-8d57-7b990c49450f.jpg"
                  alt="Cultural landmarks"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {countries.map((country, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedCountry(country)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{country.icon}</div>
                    <h3 className="text-2xl font-semibold mb-2">{country.name}</h3>
                    <p className="text-muted-foreground">{country.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {selectedCountry && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <Button
              variant="ghost"
              className="mb-6 gap-2"
              onClick={() => setSelectedCountry(null)}
            >
              <Icon name="ArrowLeft" size={20} />
              Назад к странам
            </Button>
            
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{selectedCountry.icon}</div>
                <h1 className="text-5xl font-bold text-primary mb-4">{selectedCountry.name}</h1>
                <p className="text-xl text-muted-foreground">{selectedCountry.description}</p>
              </div>

              <Tabs defaultValue="history" className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8">
                  <TabsTrigger value="history">История</TabsTrigger>
                  <TabsTrigger value="culture">Культура</TabsTrigger>
                  <TabsTrigger value="traditions">Традиции</TabsTrigger>
                  <TabsTrigger value="cuisine">Кухня</TabsTrigger>
                  <TabsTrigger value="festivals">Праздники</TabsTrigger>
                </TabsList>

                <TabsContent value="history" className="animate-fade-in">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <Icon name="BookOpen" size={32} className="text-secondary flex-shrink-0" />
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">История</h2>
                          <p className="text-lg leading-relaxed text-muted-foreground">
                            {selectedCountry.history}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Icon name="Lightbulb" size={20} />
                          Интересные факты
                        </h3>
                        <ul className="space-y-3">
                          {selectedCountry.facts.map((fact, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-accent flex-shrink-0">•</span>
                              <span className="text-muted-foreground">{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="culture" className="animate-fade-in">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <Icon name="Users" size={32} className="text-secondary flex-shrink-0" />
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">Культура и ценности</h2>
                          <p className="text-lg leading-relaxed text-muted-foreground">
                            {selectedCountry.culture}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="traditions" className="animate-fade-in">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <Icon name="Sparkles" size={32} className="text-secondary flex-shrink-0" />
                        <h2 className="text-2xl font-semibold">Традиции и обычаи</h2>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedCountry.traditions.map((tradition, i) => (
                          <div
                            key={i}
                            className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <p className="text-lg">{tradition}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="cuisine" className="animate-fade-in">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <Icon name="UtensilsCrossed" size={32} className="text-secondary flex-shrink-0" />
                        <h2 className="text-2xl font-semibold">Национальная кухня</h2>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedCountry.cuisine.map((dish, i) => (
                          <div
                            key={i}
                            className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <p className="text-lg">{dish}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="festivals" className="animate-fade-in">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <Icon name="Calendar" size={32} className="text-secondary flex-shrink-0" />
                        <h2 className="text-2xl font-semibold">Праздники и фестивали</h2>
                      </div>
                      <div className="space-y-4">
                        {selectedCountry.festivals.map((festival, i) => (
                          <div
                            key={i}
                            className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <p className="text-lg">{festival}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        {activeSection === 'traditions' && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-primary">Традиции и обычаи</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {traditions.map((tradition, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="text-5xl">{tradition.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{tradition.title}</h3>
                      <p className="text-muted-foreground">{tradition.country}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}


      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">Откройте для себя культурное богатство планеты</p>
          <p className="text-sm opacity-80">© 2025 Культуры Мира. Образовательная платформа</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;