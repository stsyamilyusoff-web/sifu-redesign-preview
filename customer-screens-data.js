// Customer (parent) app data for the unified redesign hub.
// Grounded in 00-CUSTOMER-SCREEN-REGISTRY.md (2026-06-26). 44 screens, 10 categories.
// Detail (before/after + Hafiz comment boxes) lives on the customer hub; nodes link out to it.
// status: briefed (mocked) | pass (cluster floor pass) | shared | demoted (folded into another screen).
window.CUSTOMER_BRIEF_BASE = "https://stsyamilyusoff-web.github.io/sifu-customer-preview/";

// Parent journey = the hub spine, journey order. Design is COMPLETE (all 44 mocked), pending Hafiz review,
// so every stage reads "mocked" rather than a phased rollout.
window.CUSTOMER_STAGES = [
  { key:"acquire",  num:"1", t:"Get started",       tag:"Find a service I can trust, sign up",     phase:"Mocked", phaseClass:"done", role:"Acquisition" },
  { key:"match",    num:"2", t:"Request & Match",    tag:"Ask for a tutor, get the right fit",        phase:"Mocked", phaseClass:"done", role:"★ North Star — the matching core", star:true },
  { key:"attend",   num:"3", t:"Schedule & Attend",  tag:"Classes actually happen",                   phase:"Mocked", phaseClass:"done", role:"Service delivery" },
  { key:"pay",      num:"4", t:"Pay",                tag:"Pay reliably, understand the bill",         phase:"Mocked", phaseClass:"done", role:"Monetization" },
  { key:"progress", num:"5", t:"Stay & Progress",    tag:"See proof my child improves, keep paying",  phase:"Mocked", phaseClass:"done", role:"Retention — the trust engine" },
  { key:"account",  num:"6", t:"Account & More",     tag:"Profile, students, content, referral, legal", phase:"Mocked", phaseClass:"done", role:"Cross-cutting" },
];

window.CUSTOMER_CATS = [
  { key:"onboarding", stage:"acquire", t:"Onboarding & Auth", tab:"Onboarding", desc:"First open, sign in",
    briefs:[{href:"onboarding.html", label:"Onboarding + Auth"}],
    screens:[
      {n:"Splash", s:"pass", d:"Launch splash"},
      {n:"OnBoarding", s:"briefed", d:"Value carousel (intro copy restored)"},
      {n:"GetStarted", s:"demoted", d:"Folded into the onboarding intro slide"},
      {n:"Register", s:"briefed", d:"Sign up (referral field restored)"},
      {n:"VerifyCode", s:"briefed", d:"OTP entry (P0 bypass flagged)"},
      {n:"UpdateProfile", s:"briefed", d:"Complete profile"},
    ]},
  { key:"home", stage:"progress", t:"Home", tab:"Home", desc:"The daily landing — aggregates the journey",
    briefs:[{href:"home.html", label:"Home"}],
    screens:[
      {n:"Home", s:"briefed", d:"Journey-first home, supportive overdue framing"},
    ]},
  { key:"request", stage:"match", t:"Request & Matching", tab:"Requests", desc:"Ask for a tutor and get matched",
    briefs:[{href:"request-flow.html", label:"Request flow"},{href:"curated-choice.html", label:"Curated choice"}],
    screens:[
      {n:"Requests", s:"briefed", d:"Request list (tab)"},
      {n:"RequestNow", s:"briefed", d:"Start a request"},
      {n:"TutorRequest", s:"demoted", d:"Folded into request step 1"},
      {n:"SchedulePreferencesForm", s:"briefed", d:"Schedule + preferences (TutorRequestForm3)"},
      {n:"GetTutorRequestPrice", s:"demoted", d:"Folded into the schedule screen's inline price"},
      {n:"TutorRequestAppliedStatus", s:"demoted", d:"Became a success toast on request detail"},
      {n:"RequestDetails", s:"pass", d:"Request detail (state-adaptive)"},
      {n:"RequestCompletedDetails", s:"demoted", d:"Unified into RequestDetails"},
      {n:"Curated choice", s:"shared", d:"Curated shortlist (3-5 tutors) — gated on shortlist API"},
    ]},
  { key:"classes", stage:"attend", t:"Classes & Attendance", tab:"Calendar", desc:"Classes happen and get verified",
    briefs:[{href:"schedule-attendance.html", label:"Schedule + Attendance"}],
    screens:[
      {n:"ClassSchedule", s:"briefed", d:"Schedule (Calendar tab), next-class focal"},
      {n:"TutorClassAttendance", s:"briefed", d:"Attendance — the verify tap (business engine)"},
    ]},
  { key:"billing", stage:"pay", t:"Billing & Payments", tab:"Stack", desc:"Pay the commitment fee + invoices",
    briefs:[{href:"billing.html", label:"Billing"}],
    screens:[
      {n:"Invoice", s:"briefed", d:"Invoice list"},
      {n:"PayAllSummary", s:"briefed", d:"Pay-all summary"},
      {n:"CommitmentFeePending", s:"briefed", d:"Commitment fee pending"},
      {n:"InvoiceDetailPending", s:"pass", d:"Unpaid invoice detail"},
      {n:"InvoiceDetailPaid", s:"pass", d:"Paid invoice detail"},
      {n:"CommitmentFeeDetail", s:"pass", d:"CF detail (credit explanation)"},
      {n:"RefundInvoiceDetail", s:"pass", d:"Refund invoice detail"},
      {n:"PaymentGateway", s:"pass", d:"Fiuu payment gateway"},
      {n:"PaymentCongratulations", s:"pass", d:"Payment success"},
      {n:"SharedInvoiceDetail", s:"shared", d:"Shared invoice-detail component"},
    ]},
  { key:"reports", stage:"progress", t:"Reports", tab:"Stack", desc:"Proof the child is improving (the aha + retention)",
    briefs:[{href:"reports-view.html", label:"Reports view"}],
    screens:[
      {n:"StudentReport", s:"briefed", d:"Per-student report hub"},
      {n:"EvaluationReport", s:"briefed", d:"Parent-facing eval (first class, the aha)"},
      {n:"ProgressReport", s:"briefed", d:"Parent-facing progress (recurring)"},
    ]},
  { key:"profile", stage:"account", t:"Profile, Account & Students", tab:"Profile", desc:"Identity, account, your children",
    briefs:[{href:"profile-hub.html", label:"Profile hub"}],
    screens:[
      {n:"ProfileMenu", s:"briefed", d:"Profile hub (grouped cards + Settings)"},
      {n:"ParentProfile", s:"briefed", d:"Parent profile"},
      {n:"StudentList", s:"briefed", d:"Your children (tappable cards)"},
      {n:"AddNewStudent", s:"briefed", d:"Add a child (now reachable)"},
      {n:"CameraScreen", s:"pass", d:"In-app camera"},
    ]},
  { key:"content", stage:"account", t:"Content & Notifications", tab:"News", desc:"Updates, articles, the notification feed",
    briefs:[{href:"content-notifications.html", label:"Content + Notifications"}],
    screens:[
      {n:"News", s:"briefed", d:"News + articles feed (tab)"},
      {n:"NewsDetails", s:"demoted", d:"Folded into the one shared reader"},
      {n:"LatestBlog", s:"demoted", d:"Merged into the News feed"},
      {n:"RouteToBlogsDetails", s:"demoted", d:"Merged into the one shared reader"},
      {n:"Notifications", s:"briefed", d:"Notification feed (routing bug fixed)"},
    ]},
  { key:"referral", stage:"account", t:"Referral", tab:"Stack", desc:"Bring a friend, earn a reward",
    briefs:[{href:"referral-static.html", label:"Referral + Static"}],
    screens:[
      {n:"ReferFriend", s:"briefed", d:"Refer a friend"},
      {n:"MyReferralEarnings", s:"briefed", d:"Referral earnings (parent payout — P11)"},
    ]},
  { key:"static", stage:"account", t:"Static / Legal", tab:"Stack", desc:"Reference and legal pages",
    briefs:[{href:"referral-static.html", label:"Referral + Static"}],
    screens:[
      {n:"FAQs", s:"briefed", d:"Frequently asked questions"},
      {n:"TermAndConditions", s:"briefed", d:"Terms and conditions"},
      {n:"PrivacyPolicy", s:"briefed", d:"Privacy policy"},
    ]},
];
window.CUSTOMER_LABEL = {briefed:"Mocked", pass:"Floor pass", shared:"Shared", demoted:"Demoted"};
window.CUSTOMER_STATUS_COLOR = {briefed:"#1a5c38", pass:"#243cb3", shared:"#a1a1aa", demoted:"#d8923f"};
window.CUSTOMER_STATUS_LABEL = {briefed:"Mocked (in brief)", pass:"Cluster floor pass", shared:"Shared component", demoted:"Demoted (folded)"};
