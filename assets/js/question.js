let scrumQuestions = [
  {
    category: "Scrum",
    numb: 1,
    question: "What should happen during the Daily Scrum? ",
    answer: "The team plans the progress towards the sprint goal",
    options: [
      "Team shares status updates ",
      "Stakeholders have the chance to bring in urgent tasks",
      "The team plans the progress towards the sprint goal",
      "The Product Owner assigns tasks, so every team member is utilized ",
    ],
  },
  {
    category: "Scrum",
    numb: 2,
    question: "What happens in between Sprints?",
    answer: "None of the above",
    options: [
      "Planning",
      "Product Backlog Refinement",
      "The Sprint Retrospective",
      "None of the above",
    ],
  },
  {
    category: "Scrum",
    numb: 3,
    question: "When should a Scrum Team adapt on encountering new information?",
    answer: "Immediately",
    options: [
      "At the Sprint Review",
      "At the Sprint Retrospective",
      "Immediately",
      "At the Sprint Review or Sprint Retrospective, depending",
    ],
  },
  {
    category: "Scrum",
    numb: 4,
    question: "What basic theory is the Scrum Framework based on?",
    answer: "Empiricism ",
    options: ["Empiricism ", "Kanban", "Lean Startup", "Agile"],
  },
  {
    category: "Scrum",
    numb: 5,
    question: "How might the Scrum Master serve the wider organisation?",
    answer: "Helping management understand the benefits of empiricism",
    options: [
      "The Scrum Master doesn't serve the organisation",
      "Advising management on how to maximise productivity with Scrum",
      "Ensuring the team are always busy",
      "Helping management understand the benefits of empiricism",
    ],
  },
  {
    category: "Scrum",
    numb: 6,
    question:
      "Which of the following is the best and most complete description of Scrum?",
    answer: "Scrum is a lightweight framework",
    options: [
      "Scrum is a detailed and complete methodology for complex, adaptive problems",
      "Scrum is a lightweight framework",
      "Scrum is a simple framework with 3 roles, 5 events and 3 artifacts",
      "Scrum is a framework for resource utilization",
    ],
  },
  {
    category: "Scrum",
    numb: 7,
    question: "What is the result of the Sprint Review?",
    answer:
      " A revised Product Backlog that defines the probable Product Backlog items for the next Sprint",
    options: [
      " Common understanding of progress toward the Sprint Goal and how progress is trending toward completing the work in the Sprint Backlog",
      " A list of improvements that the Scrum Team will implement in the next Sprint",
      "Common understanding of what can be delivered in the Increment and how will the work needed to deliver the Increment be achieved",
      " A revised Product Backlog that defines the probable Product Backlog items for the next Sprint",
    ],
  },
  {
    category: "Scrum",
    numb: 8,
    question: "What is the Increment?",
    answer:
      "The sum of all the Product Backlog items completed during the Sprint and the value of the increments of all previous Sprints",
    options: [
      "All items in the Sprint Backlog that could be released regardless of whether the Product Owner decides to actually do it",
      "The sum of all the Product Backlog items completed during the Sprint",
      "The sum of all the Product Backlog items completed during the Sprint and the value of the increments of all previous Sprints",
      "All Done items in the Sprint Backlog",
    ],
  },
  {
    category: "Scrum",
    numb: 9,
    question: "Who creates the increment?",
    answer: "The Development Team",
    options: [
      "The Scrum Team",
      "The Development Team and The Product Owner",
      "The Development Team",
      "The Product Owner",
    ],
  },
  {
    category: "Scrum",
    numb: 10,
    question:
      "Which of the following can be a product according to The Scrum Guide?",
    answer: "all of the above",
    options: [
      "A service",
      "Hardware engineering, like cars",
      "Software",
      "all of the above",
    ],
  },
];

let kanbanQuestions = [
  {
    category: "Kanban",
    numb: 1,
    question: "Goals of Kanban include",
    answer: "Visualizing Work, Reducing Waste, Maximizing Customer Value",
    options: [
      "Visualizing Work, Organizing Staff, Creating a Better Process",
      "Visualizing Work, Reducing Waste, Maximizing Customer Value",
      "Reducing Waste, Minimizing Customer Costs, Visualizing Work",
      "Improved User Stories, Improved Story Point Completion, Reducing Waste",
    ],
  },
  {
    category: "Kanban",
    numb: 2,
    question: "What is a benefit of limiting WIP?",
    answer:
      "Quality can improve as it gives teams or individuals fewer tasks to focus their effort on",
    options: [
      "Quality can improve as it gives teams or individuals fewer tasks to focus their effort on",
      "Sprint or iteration duration can be decreased because of enhanced visualization tools",
      "Decrease in cost to produce each individual product because of less money spent on initial raw resources",
      "None of the above",
    ],
  },
  {
    category: "Kanban",
    numb: 3,
    question: "How do you calculate WIP using Little's Law?",
    answer: "WIP = Throughput * Cycle Time",
    options: [
      "WIP = Cycle Time * Sprint Duration",
      "WIP = Sprint Duration * Throughput",
      "WIP = Throughput / Cycle Time",
      "WIP = Throughput * Cycle Time",
    ],
  },
  {
    category: "Kanban",
    numb: 4,
    question: "The Five Critical Metrics of a Kanban workflow are?",
    answer: "Throughput, Lead Time, Cycle Time, Blockers, Total WIP",
    options: [
      "Value Added Delivery, Minimum Viable Product, Cycle Time, Total WIP, Throughput",
      "Throughput, Lead Time, Cycle Time, Blockers, Total WIP",
      "Minimum Viable Product, WIP Limits, Cycle Time, Lower Statistical Limit, Upper Statistical Limit",
      "Defects Per Million Opportunities, Total WIP, Cycle Time, Throughput, Minimum Viable Product",
    ],
  },
  {
    category: "Kanban",
    numb: 5,
    question: "What should be done if a bottleneck is noticed in the System?",
    answer:
      "In a mature Kanban flow a bottleneck is most likely caused by some sort defect, unavailable skill or staff, or an issue with a dependency. The cause should be investigated and corrected",
    options: [
      "In a mature Kanban flow a bottleneck is most likely caused by some sort defect, unavailable skill or staff, or an issue with a dependency. The cause should be investigated and corrected",
      "WIP limit should be raised to allow for an even flow. Too low of a WIP limit is the cause of bottlenecks and they should be adjusted to remove the bottleneck",
      "Bottleneck's happen in any system and they should be ignored. You cannot prevent a bottleneck from occurring in a Kanban workflow",
      "A bottleneck is a good thing and it should be encouraged to happen. The more you can cause bottlenecks, the faster a task is getting completed compared to other tasks",
    ],
  },
  {
    category: "Kanban",
    numb: 6,
    question: "Which statement is wrong for the Kanban method?",
    answer: "A standard kanban practice is to get rid of policies",
    options: [
      "Push systems are transformed into pull systems",
      "A Kanban Board or an other form of work visualization is needed",
      "A standard kanban practice is to get rid of policies",
      "Little’s Law is an unreliable method of making future predictions",
    ],
  },
  {
    category: "Kanban",
    numb: 7,
    question:
      "Your team started to exceed their WIP limit this week. They kept running out of work to do. Nothing had changed this week and the issue wasn't happening before. What should You do?",
    answer:
      "Investigate the causes. It could be a good thing, it is more likely that in a mature Kanban flow that there is an error or defect occurring that has not been caught yet",
    options: [
      "You should question the team about making sure they completed all the items in their tasks before marking it complete, the reasonable explanation is that the team was not doing all of the items",
      "You should do Nothing. This is a good thing. It could allow them to work on other tasks.",
      "You should suggest that the WIP limit be raised to keep up with the pace of the team and the workers responsible for the prior tasks be encouraged to work harder to keep up with the demand.",
      "Investigate the causes. It could be a good thing, it is more likely that in a mature Kanban flow that there is an error or defect occurring that has not been caught yet",
    ],
  },
  {
    category: "Kanban",
    numb: 8,
    question: "what is a false statement about the kanban method?",
    answer:
      "Kanban is a project management method",
    options: [
      "Kanban is a Change Management method",
      "Kanban is a project management method",
      "Kanban is a management method for service delivery",
      "Kanban is a self management method",
    ],
  },
  {
    category: "Kanban",
    numb: 9,
    question: "What is an advantage of Classes of Service?",
    answer: "Helping your team priotizing tasks",
    options: [
      "Helping your team priotizing tasks",
      "Providing a forecast on delivery for stakeholders",
      "Making clear which team member needs to work on a task",
      "Unexpected work won't occur anymore",
    ],
  },
  {
    category: "Kanban",
    numb: 10,
    question:
      "What does a fat tail delivery mean?",
    answer: "You have an unstable System, with imprecise predictions",
    options: [
      "You release all of your features at the end of the sprint",
      "The team follows the kanban method and principles",
      "You have an unstable System, with imprecise predictions",
      "all of the above",
    ],
  },
];

let productQuestions = [
  {
    category: "Product",
    numb: 1,
    question: "Which is not one of the three main hypothesis for a business?",
    answer: "Funding of the business",
    options: [
      "Costumer Problem",
      "Value of the solution",
      "Growth of the business",
      "Funding of the business",
    ],
  },
  {
    category: "Product",
    numb: 2,
    question: "You and your Company decide to pivot and make a single feature become the whole product, everything else in the product is cut away. What is this pivot called?",
    answer:
      "Zoom in pivot",
    options: [
      "Costumer need pivot",
      "Platform pivot",
      "Zoom in pivot",
      "Value capture pivot",
    ],
  },
  {
    category: "Product",
    numb: 3,
    question: "You have to decide to set up a metric to measure product success. Which one should you choose?",
    answer: "Conversion rate from trial to purchase",
    options: [
      "Conversion rate from trial to purchase",
      "Pageviews",
      "Running total of Sales",
      "Number of New Leads",
    ],
  },
  {
    category: "Product",
    numb: 4,
    question: "What is the influence of technical debt on your Product? ",
    answer: "You can't produce features as fast as before",
    options: [
      "It has no impact on the delivery of value",
      "You can't produce features as fast as before",
      "As long as it is kept small, the sideeffects are too small to notice",
      "The product doesn't function anymore",
    ],
  },
  {
    category: "Product",
    numb: 5,
    question: "A Product Mindset leads to?",
    answer:
      "Outcome based management",
    options: [
      "Less business involvement",
      "More task management",
      "Outcome based management",
      "More handoffs between departments",
    ],
  },
  {
    category: "Product",
    numb: 6,
    question: "Which term doesn't belong to the 3Vs?",
    answer: "Vanity",
    options: [
      "Validation",
      "Vision",
      "Value",
      "Vanity",
    ],
  },
  {
    category: "Product",
    numb: 7,
    question:
      "According to Steve Blank what should a company start with?",
    answer:
      "Costumer discovery",
    options: [
      "Costumer discovery",
      "Company creation",
      "Costumer building",
      "Costumer validation",
    ],
  },
  {
    category: "Product",
    numb: 8,
    question: "What is the theory of jobs to be done",
    answer:
      "Users hire a product to achieve a certain goal",
    options: [
      "Focus primarily on the best solution for a costumer problem",
      "Users hire a product to achieve a certain goal",
      "Jobs to be done shows which tasks are still necessary in order to release the product",
      "All of the above",
    ],
  },
  {
    category: "Product",
    numb: 9,
    question: "Which one is not a framework for product discovery",
    answer: "Scrum",
    options: [
      "Lean UX",
      "Design Thinking",
      "Scrum",
      "Lean Startup",
    ],
  },
  {
    category: "Product",
    numb: 10,
    question:
      "What is not a accountability of the Product Owner",
    answer: "Resource utilization",
    options: [
      "Stakeholdermanagement",
      "Costumer interviews",
      "Resource utilization",
      "Priotizing and structuring the product backlog",
    ],
  },
];
