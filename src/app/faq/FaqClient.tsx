"use client";

import { useState } from "react";

interface Question {
  question: string;
  answer: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  questions: Question[];
}

interface FaqClientProps {
  categories: Category[];
}

export function FaqClient({ categories }: FaqClientProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionId: string) => {
    const newOpen = new Set(openQuestions);
    if (newOpen.has(questionId)) {
      newOpen.delete(questionId);
    } else {
      newOpen.add(questionId);
    }
    setOpenQuestions(newOpen);
  };

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-8">
      {/* Category sidebar */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="glass-card p-4">
          <h2 className="text-xs uppercase tracking-wider text-gray-500 px-3 mb-3">
            Kategorie
          </h2>
          <nav className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                  activeCategory === cat.id
                    ? "bg-gold-500/20 text-gold-400 border border-gold-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
                <span className="ml-auto text-xs text-gray-500">
                  {cat.questions.length}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Questions */}
      <main>
        {currentCategory && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{currentCategory.icon}</span>
              <h2 className="font-display text-2xl font-bold text-white">
                {currentCategory.name}
              </h2>
            </div>

            <div className="space-y-3">
              {currentCategory.questions.map((q, idx) => {
                const questionId = `${currentCategory.id}-${idx}`;
                const isOpen = openQuestions.has(questionId);

                return (
                  <div
                    key={idx}
                    className="glass-card overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="text-white font-medium pr-4">
                        {q.question}
                      </span>
                      <span
                        className={`text-gold-500 transition-transform shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      <p className="px-5 pb-5 text-gray-400 leading-relaxed whitespace-pre-line">
                        {q.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
