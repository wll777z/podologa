export type Service = { name: string; description: string };
export type Clinic = {
  name?: string;
  professional?: { name: string; biography: string; qualifications?: string[]; photo?: string };
  services: Service[];
  contact?: { whatsapp?: string; phone?: string; email?: string; address?: string; hours?: string };
  social?: { label: string; url: string }[];
  photos?: { hero?: string; approach?: string };
};

// Preencher somente com informações reais confirmadas pela profissional.
export const clinic: Clinic = { services: [] };
export const siteName = clinic.name ?? 'Podologia & Terapias Integrativas';
export function whatsappUrl(phone?: string): string | undefined {
  if (!phone) return;
  const digits = phone.replace(/\D/g, '');
  if (!/^55[1-9]{2}\d{8,9}$/.test(digits)) return;
  return `https://wa.me/${digits}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os atendimentos e solicitar uma avaliação.')}`;
}
export const hasContact = Boolean(whatsappUrl(clinic.contact?.whatsapp) || clinic.contact?.phone || clinic.contact?.email);
export const faq = [
  { question: 'Como solicitar uma avaliação?', answer: hasContact ? 'Use os canais da seção Contato para conversar sobre sua necessidade e solicitar uma avaliação. O horário depende de confirmação direta com a profissional.' : 'Quando os canais de atendimento estiverem disponíveis nesta página, entre em contato para conversar sobre sua necessidade. Uma solicitação de avaliação não representa um horário confirmado.' },
  { question: 'Preciso saber qual atendimento escolher?', answer: 'Não. O primeiro contato é um espaço para esclarecer dúvidas e entender as possibilidades de cuidado. A escolha deve considerar suas necessidades e a avaliação individual.' },
  { question: 'Como funciona o primeiro contato?', answer: 'Você conta o que procura, recebe informações sobre os atendimentos disponíveis e combina os próximos passos. O horário depende de confirmação direta com a profissional.' },
  { question: 'Onde consultar os serviços disponíveis?', answer: clinic.services.length > 0 ? 'Consulte a lista na seção Cuidados. Para esclarecer dúvidas sobre a disponibilidade e a adequação de um atendimento, converse com a profissional.' : 'A seção Cuidados apresenta os eixos de atuação. A lista específica de serviços será disponibilizada após confirmação com a profissional; consulte os canais de atendimento assim que estiverem disponíveis.' },
  { question: 'As terapias integrativas substituem outros cuidados?', answer: 'Não. As práticas integrativas têm caráter complementar e não substituem acompanhamento médico, diagnóstico ou tratamentos quando necessários. Converse com os profissionais que acompanham sua saúde.' },
];
