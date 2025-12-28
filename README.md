# 📚 Selçuk Üniversitesi Kütüphane Rezervasyon Sistemi

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-development-orange.svg)

**Akıllı kütüphane masa rezervasyonu ve doluluk takip sistemi**

[Özellikler](#-özellikler) •
[Teknolojiler](#-teknoloji-stack) •
[Kurulum](#-kurulum) •
[API Dokümantasyonu](#-api-dokümantasyonu) •
[Ekran Görüntüleri](#-ekran-görüntüleri)

</div>

---

## 📋 Proje Hakkında

Bu proje, Selçuk Üniversitesi mobil uygulamasına entegre edilecek kapsamlı bir **kütüphane masa rezervasyon ve doluluk takip sistemi**dir. Öğrenciler uygulama üzerinden masa rezervasyonu yapabilir, QR kod ile check-in gerçekleştirebilir ve anlık doluluk oranlarını takip edebilir.

### 🎯 Proje Hedefleri

- Kütüphane kaynaklarının verimli kullanımı
- Öğrenci deneyiminin iyileştirilmesi
- Gerçek zamanlı doluluk takibi
- Adil ve şeffaf masa dağıtımı

---

## ✨ Özellikler

### 🎫 Rezervasyon Sistemi

| Özellik | Açıklama |
|---------|----------|
| **Esnek Süre Seçimi** | 1, 2 veya 3 saatlik bloklar halinde rezervasyon |
| **3 Saatlik Kilit** | Her rezervasyon 3 saatlik masa kilidi oluşturur |
| **Zincir Rezervasyon** | Son 30 dakikada yeni rezervasyon ile süresiz uzatma |
| **Günlük Limit Yok** | Zincir rezervasyonlarla gün boyu çalışma imkanı |

### 📱 QR Check-in Sistemi

```
┌─────────────────────────────────────────────────────────────────┐
│                      QR CHECK-IN AKIŞI                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Rezervasyon     25. Dakika      30. Dakika                    │
│  Başlangıcı      Uyarı           Timeout                       │
│      │              │                │                          │
│      ▼              ▼                ▼                          │
│  ┌──────┐      ┌──────────┐    ┌──────────┐                    │
│  │ 0 dk │ ───→ │ ⚠️ Uyarı │ ──→│ ❌ İptal │                    │
│  └──────┘      │ Bildirim │    │ Otomatik │                    │
│      │         └──────────┘    └──────────┘                    │
│      │                                                          │
│      ▼                                                          │
│  ┌──────────────────┐                                          │
│  │ 📱 QR Okutuldu   │ → ✅ Rezervasyon Aktif                   │
│  │ 📍 Konum Doğru   │                                          │
│  └──────────────────┘                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

- **30 dakika** içinde QR okutma zorunluluğu
- **25. dakikada** push notification uyarısı
- **Konum doğrulama** (maksimum 50 metre)
- Zincir rezervasyonlarda **15 dakika** QR süresi

### 🗺️ İnteraktif Kroki Sistemi

Sinema salonu tarzı görsel masa seçimi:

```
┌─────────────────────────────────────────────────────────────────┐
│                         SALON KROKİSİ                           │
├─────────────────────────────────────────────────────────────────┤
│                      🚪 GİRİŞ                                   │
│                                                                 │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                   │
│   │🔴 │ │🔴 │ │🟢 │ │🟢 │ │🔴 │ │🟡 │                   │
│   │A-01│ │A-02│ │A-03│ │A-04│ │A-05│ │A-06│                   │
│   │🔌🪟│ │🔌 │ │   │ │🔌 │ │🔌🪟│ │🔌 │                   │
│   └────┘ └────┘ └────┘ └────┘ └────┘ └────┘                   │
│                                                                 │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                   │
│   │🟢 │ │🔵 │ │🟢 │ │🔴 │ │🟢 │ │🔴 │                   │
│   │B-01│ │B-02│ │B-03│ │B-04│ │B-05│ │B-06│                   │
│   │🤫 │ │🤫🔌│ │🤫 │ │🤫🔌│ │🤫 │ │🤫🔌│                   │
│   └────┘ └────┘ └────┘ └────┘ └────┘ └────┘                   │
│                                                    🪟 PENCERE   │
├─────────────────────────────────────────────────────────────────┤
│  🟢 Boş    🔴 Dolu    🟡 Yakında Boşalacak    🔵 Seçili        │
└─────────────────────────────────────────────────────────────────┘
```

### 🏷️ Masa Özellikleri

Her masanın kendine özel özellikleri:

| İkon | Özellik | Açıklama |
|------|---------|----------|
| 🔌 | Priz | Elektrik prizi mevcut |
| 🪟 | Cam Kenarı | Pencere kenarında, manzaralı |
| 🤫 | Sessiz Bölge | Sessiz çalışma alanında |
| 🖥️ | Bilgisayar | Masada bilgisayar mevcut |
| 👥 | Grup Masası | Grup çalışmasına uygun |
| ♿ | Engelli Erişimi | Engelli erişimine uygun |
| ❄️ | Klima Yakını | Klimaya yakın konum |
| 💡 | Masa Lambası | Kişisel aydınlatma |

### 📊 Doluluk Takibi

- Anlık genel doluluk oranı
- Salon bazlı doluluk gösterimi
- "Yakında boşalacak" masa gösterimi
- Gerçek zamanlı güncelleme (WebSocket)

### 🕐 Çalışma Saatleri

| Dönem | Saatler | Özel Kurallar |
|-------|---------|---------------|
| **Normal** | 08:00 - 23:00 | Standart kurallar |
| **Vize Haftası** | 7/24 | Gece vardiyası aktif |
| **Final Haftası** | 7/24 | Gece vardiyası aktif |

---

## 🔄 Rezervasyon Akış Şeması

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         REZERVASYON YAŞAM DÖNGÜSÜ                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                            ┌──────────────┐                                │
│                            │   BAŞLANGIÇ  │                                │
│                            └──────┬───────┘                                │
│                                   │                                        │
│                                   ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │                         MASA & SAAT SEÇİMİ                          │  │
│  │  • Salon seç (kroki görünümü)                                       │  │
│  │  • Zaman seç (1-3 saat)                                             │  │
│  │  • Masa özelliklerini filtrele                                      │  │
│  └─────────────────────────────────┬───────────────────────────────────┘  │
│                                    │                                       │
│                                    ▼                                       │
│                          ┌─────────────────┐                              │
│                          │    PENDING      │                              │
│                          │  (QR Bekleme)   │                              │
│                          └────────┬────────┘                              │
│                                   │                                        │
│                    ┌──────────────┼──────────────┐                        │
│                    │              │              │                        │
│                    ▼              ▼              ▼                        │
│              ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│              │  25 dk   │  │  QR OK   │  │  30 dk   │                    │
│              │  Uyarı   │  │ Konum OK │  │ Timeout  │                    │
│              └──────────┘  └────┬─────┘  └────┬─────┘                    │
│                                 │             │                           │
│                                 ▼             ▼                           │
│                          ┌───────────┐  ┌───────────┐                    │
│                          │  ACTIVE   │  │  EXPIRED  │                    │
│                          │(Kullanım) │  │ (İptal)   │                    │
│                          └─────┬─────┘  └─────┬─────┘                    │
│                                │              │                           │
│                                │              ▼                           │
│                                │         5 dk sonra                      │
│                                │         Kilit Açılır                    │
│                                │                                          │
│          ┌─────────────────────┼─────────────────────┐                   │
│          │                     │                     │                   │
│          ▼                     ▼                     ▼                   │
│    ┌───────────┐        ┌───────────┐        ┌───────────┐              │
│    │  Son 30dk │        │  Son 10dk │        │  Kullanıcı│              │
│    │  Uzatma   │        │   Çıkış   │        │   İptal   │              │
│    │  Hatırlat │        │   Uyarı   │        │           │              │
│    └─────┬─────┘        └───────────┘        └─────┬─────┘              │
│          │                                         │                     │
│          ▼                                         ▼                     │
│    ┌───────────────┐                        ┌───────────┐               │
│    │ Zincir Rez?   │                        │ CANCELLED │               │
│    └───────┬───────┘                        └─────┬─────┘               │
│            │                                      │                      │
│     ┌──────┴──────┐                         5 dk sonra                  │
│     │             │                         Kilit Açılır                │
│     ▼             ▼                                                      │
│   EVET         HAYIR                                                     │
│     │             │                                                      │
│     │             ▼                                                      │
│     │      ┌───────────┐                                                │
│     │      │ COMPLETED │                                                │
│     │      └─────┬─────┘                                                │
│     │            │                                                       │
│     │       5 dk sonra                                                  │
│     │       Kilit Açılır                                                │
│     │                                                                    │
│     └──────────────────────────────────┐                                │
│                                        │                                 │
│                                        ▼                                 │
│                              ┌─────────────────┐                        │
│                              │   YENİ PENDING  │                        │
│                              │ (15 dk QR Süre) │                        │
│                              └─────────────────┘                        │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Teknoloji Stack

### Backend

| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| **NestJS** | Ana backend framework (TypeScript) |
| **PostgreSQL** | İlişkisel veritabanı |
| **Redis** | Cache, session, real-time state |
| **WebSocket** | Gerçek zamanlı güncellemeler |
| **Swagger** | API dokümantasyonu |

### Frontend

| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| **React** | Web uygulaması |
| **TypeScript** | Tip güvenliği |
| **Tailwind CSS** | Styling |
| **Canvas/SVG** | İnteraktif kroki |
| **React Query** | Server state yönetimi |

### Altyapı

| Teknoloji | Kullanım Amacı |
|-----------|----------------|
| **Firebase FCM** | Push notifications |
| **Docker** | Containerization |
| **Nginx** | Reverse proxy |

---

## 🗄️ Veritabanı Şeması

### ER Diyagramı

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     HALLS       │       │     TABLES      │       │ TABLE_FEATURES  │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ id (PK)         │───┐   │ id (PK)         │   ┌───│ id (PK)         │
│ name            │   │   │ hall_id (FK)  ◄─┼───┘   │ code            │
│ floor           │   │   │ table_number    │       │ name            │
│ layout_width    │   │   │ position_x      │       │ icon            │
│ layout_height   │   │   │ position_y      │       │ description     │
│ layout_config   │   │   │ qr_code         │       └─────────────────┘
│ center_latitude │   │   │ status          │               │
│ center_longitude│   │   │ is_active       │               │
│ capacity        │   └──►│                 │               │
└─────────────────┘       └────────┬────────┘               │
                                   │                        │
                                   │         ┌──────────────┘
                                   │         │
                          ┌────────▼─────────▼────┐
                          │ TABLE_FEATURE_MAPPINGS │
                          ├───────────────────────┤
                          │ id (PK)               │
                          │ table_id (FK)         │
                          │ feature_id (FK)       │
                          └───────────────────────┘
                                   │
                                   │
┌─────────────────┐       ┌────────▼────────┐       ┌─────────────────┐
│  TABLE_LOCKS    │       │  RESERVATIONS   │       │ NOTIFICATIONS   │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ id (PK)         │◄──────│ id (PK)         │──────►│ id (PK)         │
│ table_id (FK)   │       │ user_id         │       │ reservation_id  │
│ reservation_id  │       │ table_id (FK)   │       │ user_id         │
│ lock_start      │       │ hall_id (FK)    │       │ type            │
│ lock_end        │       │ start_time      │       │ title           │
│ status          │       │ end_time        │       │ body            │
│ released_at     │       │ lock_end_time   │       │ sent_at         │
└─────────────────┘       │ duration_hours  │       │ read_at         │
                          │ status          │       └─────────────────┘
                          │ checked_in_at   │
                          │ is_chain        │       ┌─────────────────┐
                          │ chain_id        │       │OP_SCHEDULES     │
                          └─────────────────┘       ├─────────────────┤
                                                    │ id (PK)         │
                                                    │ name            │
                                                    │ start_date      │
                                                    │ end_date        │
                                                    │ is_24h          │
                                                    │ opening_time    │
                                                    │ closing_time    │
                                                    └─────────────────┘
```

### Tablo Detayları

<details>
<summary><b>📁 halls (Salonlar)</b></summary>

```sql
CREATE TABLE halls (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,              -- "Ana Okuma Salonu"
    floor INTEGER NOT NULL,                   -- Kat numarası
    description TEXT,
    layout_width INTEGER NOT NULL,            -- Kroki genişliği
    layout_height INTEGER NOT NULL,           -- Kroki yüksekliği
    layout_config JSONB,                      -- Duvarlar, kapılar, pencereler
    center_latitude DECIMAL(10, 8),           -- Konum doğrulama için
    center_longitude DECIMAL(11, 8),
    allowed_radius_meters INTEGER DEFAULT 50,
    capacity INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
);
```
</details>

<details>
<summary><b>📁 tables (Masalar)</b></summary>

```sql
CREATE TABLE tables (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    hall_id UUID REFERENCES halls(id) ON DELETE CASCADE,
    table_number VARCHAR(20) NOT NULL,        -- "A-01", "B-12"
    position_x INTEGER NOT NULL,              -- Kroki X koordinatı
    position_y INTEGER NOT NULL,              -- Kroki Y koordinatı
    width INTEGER DEFAULT 40,
    height INTEGER DEFAULT 40,
    rotation INTEGER DEFAULT 0,
    qr_code VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'available',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
);
```
</details>

<details>
<summary><b>📁 reservations (Rezervasyonlar)</b></summary>

```sql
CREATE TABLE reservations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR(50) NOT NULL,             -- Öğrenci numarası
    table_id UUID REFERENCES tables(id),
    hall_id UUID REFERENCES halls(id),
    reservation_date DATE NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    lock_end_time TIMESTAMP NOT NULL,         -- start + 3 saat
    duration_hours INTEGER NOT NULL,
    is_chain BOOLEAN DEFAULT false,
    chain_id UUID,
    status VARCHAR(20) DEFAULT 'pending',
    checked_in_at TIMESTAMP,
    check_in_latitude DECIMAL(10, 8),
    check_in_longitude DECIMAL(11, 8),
    created_at TIMESTAMP DEFAULT NOW()
);
```
</details>

---

## 📐 Sistem Mimarisi

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                      SELÇUK ÜNİVERSİTESİ MOBİL APP                          │
│                           (Mevcut Uygulama)                                  │
└─────────────────────────────────┬────────────────────────────────────────────┘
                                  │ WebView / Deep Link
                                  ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                        KÜTÜPHANE MODÜLÜ (React)                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Ana Sayfa  │  │    Salon     │  │  Rezervasyon │  │    Profil    │     │
│  │   Doluluk    │  │   Haritası   │  │   Yönetimi   │  │    Geçmiş    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────┬────────────────────────────────────────────┘
                                  │ REST API + WebSocket
                                  ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                          BACKEND (NestJS)                                    │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │  API Gateway  │  Auth Guard  │  Rate Limiter  │  CORS  │  Swagger     │ │
│  └────────────────────────────────────────────────────────────────────────┘ │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Reservation  │  │  QR/Check-in │  │ Notification │  │   Schedule   │     │
│  │    Module    │  │    Module    │  │    Module    │  │    Module    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Hall/Table  │  │  Statistics  │  │    Admin     │  │  WebSocket   │     │
│  │    Module    │  │    Module    │  │    Module    │  │   Gateway    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────┬────────────────────────────────────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│    PostgreSQL    │    │      Redis       │    │   Firebase FCM   │
│    (Ana DB)      │    │    (Cache)       │    │ (Push Notif)     │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

---

## 📱 Ekran Görüntüleri

### Ana Sayfa - Doluluk Görünümü

```
┌─────────────────────────────────────────────────────────────────┐
│  ≡  SELÇUK ÜNİ. KÜTÜPHANE          🔔  👤                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              📊 GENEL DOLULUK                           │   │
│  │                                                         │   │
│  │              ████████████░░░░░░░░                       │   │
│  │                   68%                                   │   │
│  │                                                         │   │
│  │         145 / 213 masa kullanımda                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  📍 SALONLAR                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 📚 Ana Okuma Salonu                    ████████░░  78%  │   │
│  │    58/74 masa dolu                         12 boş →     │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ 🤫 Sessiz Çalışma                      ██████████  95%  │   │
│  │    38/40 masa dolu                          2 boş →     │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │ 👥 Grup Çalışma                        ████░░░░░░  42%  │   │
│  │    21/50 masa dolu                         29 boş →     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  🕐 Çalışma Saatleri: 08:00 - 23:00                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Salon Seçimi ve Kroki

```
┌─────────────────────────────────────────────────────────────────┐
│  ←  Ana Okuma Salonu                    🔍 Filtrele            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─ Zaman Seçimi ─────────────────────────────────────────┐    │
│  │  📅 Bugün, 28 Aralık 2025                              │    │
│  │  Başlangıç: [14:00 ▼]     Süre: [2 Saat ▼]            │    │
│  │  Bitiş: 16:00  •  Kilit: 17:00'ye kadar               │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌─ Filtreler ────────────────────────────────────────────┐    │
│  │  ☑️ 🔌 Priz   ☐ 🪟 Cam   ☐ 🤫 Sessiz   ☐ ♿ Erişim   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    🚪 GİRİŞ                             │   │
│  │  ┌────┐┌────┐┌────┐┌────┐┌────┐┌────┐                 │   │
│  │  │🔴 ││🔴 ││🟢 ││🟢 ││🔴 ││🟡 │                 │   │
│  │  │A-01││A-02││A-03││A-04││A-05││A-06│                 │   │
│  │  └────┘└────┘└────┘└────┘└────┘└────┘                 │   │
│  │                                                         │   │
│  │  ┌────┐┌────┐┌────┐┌────┐┌────┐┌────┐                 │   │
│  │  │🟢 ││🔵 ││🟢 ││🔴 ││🟢 ││🔴 │ ← B-02 SEÇİLDİ   │   │
│  │  │B-01││B-02││B-03││B-04││B-05││B-06│                 │   │
│  │  └────┘└────┘└────┘└────┘└────┘└────┘                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─ Seçilen Masa: B-02 ───────────────────────────────────┐    │
│  │  📍 Sessiz Bölge  •  🏷️ 🤫 Sessiz  🔌 Priz            │    │
│  │         [ 🎫 REZERVASYON YAP ]                         │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- pnpm (önerilen) veya npm

### Backend Kurulumu

```bash
# Repository'yi klonla
git clone https://github.com/selcuk-university/library-reservation-system.git
cd library-reservation-system

# Backend bağımlılıklarını yükle
cd backend
pnpm install

# Environment dosyasını oluştur
cp .env.example .env

# Veritabanı migration'larını çalıştır
pnpm run migration:run

# Geliştirme sunucusunu başlat
pnpm run start:dev
```

### Frontend Kurulumu

```bash
# Frontend klasörüne geç
cd frontend
pnpm install

# Geliştirme sunucusunu başlat
pnpm run dev
```

### Docker ile Kurulum

```bash
# Tüm servisleri başlat
docker-compose up -d

# Logları takip et
docker-compose logs -f
```

---

## 📚 API Dokümantasyonu

API dokümantasyonuna Swagger UI üzerinden erişebilirsiniz:

```
http://localhost:3000/api/docs
```

### Temel Endpoint'ler

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `GET` | `/api/halls` | Tüm salonları listele |
| `GET` | `/api/halls/:id/tables` | Salon masalarını getir |
| `GET` | `/api/halls/:id/availability` | Doluluk durumu |
| `POST` | `/api/reservations` | Yeni rezervasyon oluştur |
| `POST` | `/api/reservations/:id/check-in` | QR check-in |
| `POST` | `/api/reservations/:id/extend` | Rezervasyon uzat |
| `DELETE` | `/api/reservations/:id` | Rezervasyon iptal |
| `GET` | `/api/statistics/occupancy` | Doluluk istatistikleri |

---

## 📅 Geliştirme Yol Haritası

### Faz 1: Temel Altyapı ✅
- [x] Proje yapısı ve dokümantasyon
- [ ] PostgreSQL şema oluşturma
- [ ] NestJS modüler yapı kurulumu
- [ ] Temel API endpoints

### Faz 2: Çekirdek Özellikler
- [ ] Salon ve masa yönetimi (CRUD)
- [ ] Rezervasyon sistemi
- [ ] QR kod üretimi ve okutma
- [ ] Konum doğrulama servisi

### Faz 3: Bildirim & Zamanlama
- [ ] Cron job sistemi
- [ ] FCM entegrasyonu
- [ ] Otomatik rezervasyon iptali

### Faz 4: Frontend
- [ ] React uygulama yapısı
- [ ] İnteraktif salon haritası
- [ ] Doluluk göstergesi dashboard

### Faz 5: Admin Panel
- [ ] Salon/masa düzenleme
- [ ] Sınav dönemi tanımlama
- [ ] İstatistik raporları

### Faz 6: Test & Entegrasyon
- [ ] Unit & Integration testler
- [ ] Üniversite uygulaması entegrasyonu
- [ ] Performans optimizasyonu

---

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 📞 İletişim

**Selçuk Üniversitesi Bilgi İşlem Daire Başkanlığı**

- 📧 Email: bilgiislem@selcuk.edu.tr
- 🌐 Web: https://www.selcuk.edu.tr

---

<div align="center">

**Selçuk Üniversitesi © 2025**

*Akıllı Kampüs Projesi*

</div>
