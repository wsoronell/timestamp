# Timestamp Project

## Overview

Timestamp is an application that allows contractors with multiple streams of revenue, defined as jobs in Timestamp, to keep track of all the information related to those jobs (time entries, expense write-offs, paychecks, etc.). This application is aimed to relieve some of the concerns that come about when working as a contractor such as ensuring employers are paying out as expected, keeping track and estimating total amount to be taxed at the end of the fiscal year, and viewing a schedule that shows all upcoming shifts, any duration of work which is billed to employer, for a given period of time.

### Business Case

Being a contractor involves keeping track of shifts for billing employers, ensure employers are paying invloices correctly and on-time, and also making sure to minimize tax payouts by writing off any business expenses. With Timestamp, a contractor can feel confident that they will have all of the resources available to them to stay organized and ready for any curve balls that can come about when working as a contractor.

### End Goal

Making it easier for contractors to keep track of the following:
* scheduled shifts
* expected payouts
* expenses for write-offs
* timestamp tracker

### Audience

Any contractor that is payed through an I9. This means that upon payment, the amount has none of the following items deducted from the payment total:
* social security
* state tax
* federal tax
* additional taxes

**Definitions**
* *Job*- Entity that schedules shifts to work and pays money for those shifts.
* *Shift*- A duration of time spent working for a job.
* *Expense*- Any costs accummulated during a shift which are eligible to be written off as a business expense for taxes.
* *Pay Rate*- The formula used to calculate the payouit given a shift's duration.
* *Timestamp*- A specific datetime entered to signal either the start or end of a shift.
* *Expected Payout*- The pay out amount calculated using the pay rate and shift information. This is compared to actual payout.
* *Actual Payout*- The pay out received by a job for the shift(s) worked during a specific timeframe.
* *Fiscal Year*- The calendar format used to determine the amount of income accummulated within a given year. This timeframe is the same as what is used for federal taxes.

## Design Layout

Below are the various pages, functions, and features designed during initial wireframing. Each page will provide a brief description of its functionality and the components within that page.

### Quick-Peek (Home)

Quick-Peek should function as a page that provides summary dashboards for all jobs. The following sections are located within Quick-Peek:
* Summary Section - Shows totals for hours worked, income earned, expected tax amount
* Scheduled Shifts - Calendar view that shows upcoming shifts across all jobs
* Income Information - Section that indicates if there are any discrepancies in payouts (expected vs actual), when the next payout will be, and a visual of all income over a period of time.

### Jobs (Job Panel)

Jobs should be a page where the user can perform any actions related to a specific job. The following sections are located within Jobs:
* Job Selection - Dropwdown to show information for a specific job
* Shift Actions - Action menu where a user can perform actions for shifts such as add-shift, add-timnestamp, edit-shift, add-expenses
* Job Actions - Action menu where a user can perform actions for shifts such as add/edit-jobs, view-payouts, add-payouts

### Analytics (Insights)

TBD

### Profile Information (My Profile)

TBD

### Authentication (Sign In || Sign Up)

TBD

