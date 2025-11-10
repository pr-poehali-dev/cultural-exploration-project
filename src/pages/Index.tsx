import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const countries = [
    { name: 'Япония', icon: '🇯🇵', description: 'Страна восходящего солнца' },
    { name: 'Италия', icon: '🇮🇹', description: 'Колыбель ренессанса' },
    { name: 'Индия', icon: '🇮🇳', description: 'Земля тысячи красок' },
    { name: 'Мексика', icon: '🇲🇽', description: 'Родина древних майя' },
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
    { id: 'cuisine', label: 'Кухня', icon: 'UtensilsCrossed' },
    { id: 'festivals', label: 'Праздники', icon: 'Calendar' },
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

        {activeSection === 'countries' && (
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

        {activeSection === 'cuisine' && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-primary">Национальная кухня</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cuisines.map((cuisine, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{cuisine.icon}</div>
                    <h3 className="text-2xl font-semibold mb-2">{cuisine.name}</h3>
                    <p className="text-muted-foreground">{cuisine.country}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'festivals' && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Праздники и фестивали</h2>
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                <img
                  src="https://cdn.poehali.dev/projects/ef931551-9cd8-4f55-a9ec-83e6528f3bfd/files/17dd8e22-2d90-4491-a23d-61da2945adf8.jpg"
                  alt="Cultural celebrations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {festivals.map((festival, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{festival.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-1">{festival.name}</h3>
                        <p className="text-muted-foreground mb-2">{festival.country}</p>
                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                          <Icon name="Calendar" size={14} />
                          {festival.season}
                        </div>
                      </div>
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