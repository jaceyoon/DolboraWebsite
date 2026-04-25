"use client";

import { useEffect, useState, type FormEvent } from "react";

type FormState = {
  facilityName: string;
  bedSize: string;
  contactName: string;
  phone: string;
  inquiryType: "도입 문의" | "리빙랩 참여" | "제휴 제안";
  message: string;
};

const INITIAL: FormState = {
  facilityName: "",
  bedSize: "",
  contactName: "",
  phone: "",
  inquiryType: "도입 문의",
  message: "",
};

export default function ContactForm() {
  const [data, setData] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[DOLBORA] contact form submit:", data);
    setSubmitted(true);
    setData(INITIAL);
  };

  useEffect(() => {
    if (!submitted) return;
    const id = window.setTimeout(() => setSubmitted(false), 4000);
    return () => window.clearTimeout(id);
  }, [submitted]);

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-3xl border border-black/5 bg-white p-7 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="시설명" required>
          <input
            type="text"
            required
            value={data.facilityName}
            onChange={(e) => update("facilityName", e.target.value)}
            placeholder="예) 양평네스트 요양원"
            className={inputCls}
          />
        </Field>
        <Field label="시설 규모 (베드 수)" required>
          <input
            type="number"
            min={0}
            required
            value={data.bedSize}
            onChange={(e) => update("bedSize", e.target.value)}
            placeholder="예) 80"
            className={inputCls}
          />
        </Field>
        <Field label="담당자 성함" required>
          <input
            type="text"
            required
            value={data.contactName}
            onChange={(e) => update("contactName", e.target.value)}
            placeholder="예) 김민정"
            className={inputCls}
          />
        </Field>
        <Field label="연락처" required>
          <input
            type="tel"
            required
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="010-0000-0000"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="문의 내용 분류" required>
        <select
          required
          value={data.inquiryType}
          onChange={(e) =>
            update("inquiryType", e.target.value as FormState["inquiryType"])
          }
          className={`${inputCls} appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path fill='none' stroke='%230E5C4A' stroke-width='1.6' d='M2 4l4 4 4-4'/></svg>\")",
          }}
        >
          <option value="도입 문의">도입 문의</option>
          <option value="리빙랩 참여">리빙랩 참여</option>
          <option value="제휴 제안">제휴 제안</option>
        </select>
      </Field>

      <Field label="상세 메시지">
        <textarea
          rows={6}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="시설 현황, 관심 모듈, 도입 일정 등 자유롭게 적어주세요."
          className={`${inputCls} resize-y`}
        />
      </Field>

      <div className="flex flex-col gap-4 border-t border-black/5 pt-5 md:flex-row md:items-center md:justify-between">
        <p className="text-xs leading-relaxed text-ink-muted md:max-w-md">
          제출하신 정보는 상담 회신 목적으로만 사용되며, 별도 동의 없이 제3자에게 제공되지
          않습니다.
        </p>
        <button type="submit" className="btn-primary md:w-auto">
          상담 신청 보내기 <span aria-hidden>→</span>
        </button>
      </div>

      {submitted && (
        <div
          role="status"
          className="rounded-2xl border border-brand/30 bg-brand-mist px-5 py-4 text-sm font-medium text-brand-dark"
        >
          신청이 접수되었습니다. 빠른 시일 내에 회신 드리겠습니다.
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-1 text-xs font-semibold tracking-[0.06em] text-ink-soft">
        {label}
        {required && <span className="text-accent-dark">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
