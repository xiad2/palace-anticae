import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "مبخرة نحاس عثماني",
    description: "قطعة فريدة مصنوعة يدويًا من النحاس، ارتفاع 20 سم.",
    price: "AED 280",
    image: "https://via.placeholder.com/300x300?text=Antique+1"
  },
  {
    id: 2,
    name: "مراية خشب منقوشة",
    description: "مراية أثرية بإطار خشبي محفور يدويًا بطابع عربي.",
    price: "AED 450",
    image: "https://via.placeholder.com/300x300?text=Antique+2"
  }
];

export default function HomePage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Palace Anticae</h1>
      <p className="text-center text-muted-foreground">قطع أنتيكا نادرة من قلب التراث، شحن داخل الإمارات</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <Card key={item.id} className="rounded-2xl shadow-md">
            <img src={item.image} alt={item.name} className="rounded-t-2xl w-full h-64 object-cover" />
            <CardContent className="space-y-2 p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <p className="text-base font-bold">{item.price}</p>
              <a href="https://wa.me/971508750888?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%A7%D9%84%D9%82%D8%B7%D8%B9%D8%A9%20%D8%A7%D9%84%D9%85%D8%B9%D8%B1%D9%88%D8%B6%D8%A9%20%D8%B9%D9%84%D9%89%20%D9%85%D9%88%D9%82%D8%B9%20Palace%20Anticae" target="_blank" rel="noopener noreferrer">
                <Button className="w-full">اطلب الآن عبر واتساب</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}