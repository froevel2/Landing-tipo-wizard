import React from 'react';
import { Briefcase, Heart, MessageCircle, Zap, TrendingUp, Users, ShieldCheck, Clock } from 'lucide-react';
import { MotivationType } from './types';

export const BENEFITS_DATA = {
  [MotivationType.WORK]: [
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      text: "Lidera reuniones con autoridad y claridad."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      text: "Negocia aumentos y cierra ventas con confianza."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      text: "Evita malentendidos en tu equipo de trabajo."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      text: "Destaca profesionalmente por tu oratoria."
    }
  ],
  [MotivationType.PERSONAL]: [
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      text: "Conecta profundamente con tu pareja y amigos."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      text: "Expresa tus límites sin sentir culpa."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-600" />,
      text: "Resuelve conflictos familiares con calma."
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      text: "Aumenta tu seguridad al socializar."
    }
  ]
};

export const MASTERCLASS_DETAILS = [
  "2 Horas de contenido intensivo (Sin relleno).",
  "Plantillas descargables de guiones efectivos.",
  "Análisis de casos reales.",
  "Acceso de por vida a la grabación."
];