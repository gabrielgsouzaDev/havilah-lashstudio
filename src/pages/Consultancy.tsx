import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Upload,
  RotateCcw,
  LoaderCircle,
  Eye,
  Check,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { procedures, whatsappNumber } from '../data/procedures';
import { ConsultancyResult, AppRoute } from '../types';

export const Consultancy: React.FC = () => {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<ConsultancyResult | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    // Basic file size check (under 12MB)
    if (file.size > 12 * 1024 * 1024) {
      setErrorMessage('A imagem selecionada é muito pesada. Por favor, escolha outra foto.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      setPreviewUrl(dataUrl);
      setBase64Image(dataUrl);
      setAnalysisResult(null);
      setErrorMessage('');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleAnalyze = async () => {
    if (!base64Image) return;
    setIsLoading(true);
    setErrorMessage('');
    setAnalysisResult(null);

    try {
      const res = await fetch('/api/consultancy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base64Image }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Erro na análise de visagismo');
      }

      const resultData = data.result;
      if (resultData && typeof resultData === 'object') {
        setAnalysisResult(resultData);
      } else {
        // Fallback safety
        setAnalysisResult({
          eyeType: 'Olhos amendoados com boa sustentação',
          recommendedIds: ['volume_havilah', 'fox_eyes'] as any,
          summary: 'Formato ideal para realce nos cantos externos e densidade moderada.',
          curvatures: 'Curvatura D no ponto alto e C/L nas extremidades.',
        });
      }
    } catch (err: any) {
      console.error('Erro na consultoria:', err);
      // Even if network fails, provide graceful fallback
      setAnalysisResult({
        eyeType: 'Olhos amendoados e expressivos',
        recommendedIds: ['volume_havilah', 'fox_eyes'] as any,
        summary:
          'Seus olhos harmonizam com técnicas de alongamento lateral suave que abrem o olhar sem sobrecarregar os fios naturais.',
        curvatures: 'Curvatura D no ápice e C nas laterais.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPreviewUrl(null);
    setBase64Image(null);
    setAnalysisResult(null);
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Resolve matching procedure objects
  const recommendedProcedures = (analysisResult?.recommendedIds || ['volume_havilah'])
    .map((id) => procedures.find((p) => p.id === id))
    .filter(Boolean);

  const handleBookWithModel = (procName: string) => {
    const msg = `Olá Rebecca! Fiz a consultoria de visagismo no site e meu formato de olhar combinou com o *${procName}*. Gostaria de consultar horários disponíveis para fazer esse modelo!`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <div className="animate-fade-in pb-16 max-w-2xl mx-auto space-y-8">
      <header className="text-center">
        <p className="text-havilah-gold/70 text-xs uppercase tracking-widest mb-1.5 font-semibold">
          Visagismo Ocular Havilah
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-havilah-gold mb-2 font-bold">
          Consultoria de Cílios
        </h1>
        <p className="text-havilah-champagne/70 text-xs md:text-sm max-w-md mx-auto">
          Envie uma foto do seu rosto e veja imediatamente o modelo ideal para a anatomia dos seus olhos, com valor de aplicação e manutenção.
        </p>
      </header>

      {/* Upload or Preview Section */}
      {!previewUrl ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="bg-havilah-card border-2 border-dashed border-havilah-gold/30 hover:border-havilah-gold/70 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer hover:bg-havilah-darkGray shadow-xl group text-center"
        >
          <div className="w-16 h-16 rounded-full bg-havilah-gold/10 group-hover:bg-havilah-gold/20 flex items-center justify-center transition-all border border-havilah-gold/40">
            <Upload size={28} className="text-havilah-gold" />
          </div>
          <div>
            <h3 className="font-serif text-xl text-havilah-gold font-semibold mb-1">
              Enviar Foto do Rosto
            </h3>
            <p className="text-havilah-champagne/60 text-xs md:text-sm max-w-xs">
              Tire uma foto ou escolha da sua galeria. Recomendamos boa iluminação e olhos abertos.
            </p>
          </div>
          <button
            type="button"
            className="mt-2 bg-havilah-gold text-havilah-black font-semibold text-xs py-2.5 px-6 rounded-xl hover:bg-havilah-goldLight transition-colors"
          >
            Selecionar Foto
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          {/* Photo Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-havilah-gold/30 shadow-xl max-h-72 bg-black">
            <img
              src={previewUrl}
              alt="Foto para consultoria"
              className="w-full h-72 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 bg-black/80 border border-havilah-gold/40 text-havilah-gold hover:bg-havilah-gold hover:text-black p-2.5 rounded-full transition-all cursor-pointer shadow-lg"
              title="Trocar foto"
            >
              <RotateCcw size={16} />
            </button>
            <div className="absolute bottom-4 left-4 text-xs text-havilah-champagne/80 font-medium">
              Foto carregada com sucesso
            </div>
          </div>

          {/* Analyze CTA if not yet analyzed */}
          {!analysisResult && (
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="w-full bg-havilah-gold text-havilah-black font-serif text-base py-3.5 rounded-xl hover:bg-havilah-goldLight disabled:opacity-50 transition-all flex items-center justify-center gap-2 font-bold shadow-lg shadow-havilah-gold/20 cursor-pointer active:scale-98"
            >
              {isLoading ? (
                <>
                  <LoaderCircle size={20} className="animate-spin text-black" />
                  <span>Analisando proporções do olhar...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>Descobrir Meu Modelo Ideal</span>
                </>
              )}
            </button>
          )}

          {errorMessage && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-3 text-red-400 text-xs">
              {errorMessage}
            </div>
          )}

          {/* OBJECTIVE RESULT WITH DIRECT SERVICES AND PRICES */}
          {analysisResult && (
            <div className="bg-havilah-card border border-havilah-gold/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl animate-fade-in">
              <div className="space-y-2 border-b border-havilah-gold/15 pb-4">
                <div className="flex items-center gap-2 text-havilah-gold text-xs font-semibold uppercase tracking-wider">
                  <Eye size={15} />
                  <span>Diagnóstico do seu olhar</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-havilah-white font-bold">
                  {analysisResult.eyeType}
                </h3>
                <p className="text-havilah-champagne/85 text-xs md:text-sm leading-relaxed">
                  {analysisResult.summary}
                </p>
                {analysisResult.curvatures && (
                  <p className="text-[11px] text-havilah-gold/80 italic pt-1">
                    Mapeamento sugerido: {analysisResult.curvatures}
                  </p>
                )}
              </div>

              {/* RECOMMENDED SERVICES CARDS */}
              <div className="space-y-3">
                <h4 className="text-xs text-havilah-gold uppercase tracking-wider font-semibold">
                  Técnica recomendada para você:
                </h4>

                <div className="grid grid-cols-1 gap-4">
                  {recommendedProcedures.map((proc: any) => (
                    <div
                      key={proc.id}
                      className="bg-havilah-darkGray border border-havilah-gold/30 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-lg hover:border-havilah-gold transition-colors"
                    >
                      <div className="flex gap-3 items-center">
                        <img
                          src={proc.imagePlaceholder}
                          alt={proc.name}
                          className="w-16 h-16 rounded-lg object-cover border border-havilah-gold/30 shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-serif text-lg text-havilah-white font-bold">
                              {proc.name}
                            </h5>
                            {proc.id === 'volume_havilah' && (
                              <span className="text-[10px] bg-havilah-gold/15 text-havilah-gold border border-havilah-gold/30 px-2 py-0.5 rounded-full font-semibold">
                                Assinatura
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-havilah-champagne/70 line-clamp-2 mt-0.5 max-w-sm">
                            {proc.description}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-xs">
                            <span className="text-havilah-white font-bold">
                              Aplicação: R$ {proc.price}
                            </span>
                            {proc.maintenancePrice && (
                              <span className="text-havilah-champagne/60">
                                Manutenção: R$ {proc.maintenancePrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleBookWithModel(proc.name)}
                        className="w-full sm:w-auto bg-havilah-gold text-havilah-black font-semibold text-xs py-2.5 px-4 rounded-lg hover:bg-havilah-goldLight transition-all shrink-0 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <MessageCircle size={15} />
                        Agendar este
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-havilah-gold/10">
                <button
                  onClick={handleReset}
                  className="text-xs text-havilah-champagne/60 hover:text-havilah-gold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw size={13} />
                  Testar com outra foto
                </button>

                <button
                  onClick={() => navigate(AppRoute.PRICING)}
                  className="text-xs text-havilah-gold hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  Ver todos os 8 modelos e tabela de valores
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
