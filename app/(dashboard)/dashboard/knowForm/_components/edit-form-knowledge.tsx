"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

export interface Organization {
  name: string;
  fieldOfWork: string;
  leads: Lead[];
  branches: Branch[];
  otherInformation: string;
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  position: string;
  responsibilities: string;
}

export interface Branch {
  name: string;
  hr: string;
  email: string;
}

const leadSchema = z.object({
  name: z.string().min(1, "Lead name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  position: z.string().min(1, "Position is required"),
});

const branchSchema = z.object({
  name: z.string().min(1, "Lead name is required"),
  hr: z.string().min(1, "Lead name is required"),
  email: z.string().email("Invalid email address"),
});

const organizationSchema = z.object({
  name: z.string().min(1, "Organization name is required"),
  fieldOfWork: z.string().min(1, "Field of work is required"),
  leads: z.array(leadSchema).min(1, "At least one lead is required"),
  branches: z.array(branchSchema).min(1, "At least one branch is required"),
  otherInformation: z.string(),
});

const initialOrganizationState: Organization = {
  name: "",
  fieldOfWork: "",
  leads: [
    { name: "", email: "", phone: "", position: "", responsibilities: "" },
  ],
  branches: [{ name: "", hr: "", email: "" }],
  otherInformation: "",
};

function KnowledgeBaseForm() {
  const [organization, setOrganization] = useState<Organization>(
    initialOrganizationState
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = organizationSchema.parse(organization);
      const formattedData = `${validatedData.name} is a company working in ${
        validatedData.fieldOfWork
      }. 
      Key people in the organization: 
      ${validatedData.leads
        .map(
          (lead) =>
            `{
            Name: ${lead.name}
            Position: (${lead.position})
            Contact: ${lead.email} | ${lead.phone}
            },
            `
        )
        .join(" ")}. 
        Branches and their HR: 
        ${validatedData.branches
          .map(
            (branch) =>
            `{
            Location: ${branch.name}
            HR: (${branch.hr})
            Contact: ${branch.email}
            }
            `
          )
          .join(", ")}.
        Other information: 
        ${validatedData.otherInformation}`;

      // POST request to update organization with the knowledgeBase field
      const response = await fetch("/api/knowForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ knowledgeBase: formattedData }),
      });

      if (response.ok) {
        toast.success("Knowledge Base updated successfully.");
        setOrganization(initialOrganizationState);
      } else {
        alert("Failed to update knowledge base.");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert(error.errors.map((e) => e.message).join("\n"));
      } else {
        console.error(error);
        alert("An error occurred while updating the organization.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-8"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        🚀 Train Your Own Bot
      </h2>

      {/* Organization Details */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">
          🏢 Organization Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Organization Name
            </label>
            <input
              type="text"
              value={organization.name}
              onChange={(e) =>
                setOrganization({ ...organization, name: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Giri Electronics"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Field of Work
            </label>
            <input
              type="text"
              value={organization.fieldOfWork}
              onChange={(e) =>
                setOrganization({
                  ...organization,
                  fieldOfWork: e.target.value,
                })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Consumer electronics and home automation"
            />
          </div>
        </div>
      </div>

      {/* Leads Section */}

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">👤 Leads</h3>
        {organization.leads.map((lead, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  value={lead.name}
                  onChange={(e) => {
                    const newLeads = [...organization.leads];
                    newLeads[index] = { ...lead, name: e.target.value };
                    setOrganization({ ...organization, leads: newLeads });
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={lead.email}
                  onChange={(e) => {
                    const newLeads = [...organization.leads];
                    newLeads[index] = { ...lead, email: e.target.value };
                    setOrganization({ ...organization, leads: newLeads });
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="tel"
                  value={lead.phone}
                  onChange={(e) => {
                    const newLeads = [...organization.leads];
                    newLeads[index] = { ...lead, phone: e.target.value };
                    setOrganization({ ...organization, leads: newLeads });
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="+1 234-567-8900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Position
                </label>
                <input
                  type="text"
                  value={lead.position}
                  onChange={(e) => {
                    const newLeads = [...organization.leads];
                    newLeads[index] = { ...lead, position: e.target.value };
                    setOrganization({ ...organization, leads: newLeads });
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="CEO"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Responsibilities
                </label>
                <input
                  type="text"
                  value={lead.responsibilities}
                  onChange={(e) => {
                    const newLeads = [...organization.leads];
                    newLeads[index] = {
                      ...lead,
                      responsibilities: e.target.value,
                    };
                    setOrganization({ ...organization, leads: newLeads });
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="Making major corporate decisions"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setOrganization({
              ...organization,
              leads: [
                ...organization.leads,
                {
                  name: "",
                  email: "",
                  phone: "",
                  position: "",
                  responsibilities: "",
                },
              ],
            })
          }
          className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
        >
          ➕ Add Lead
        </button>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">📌 Branches</h3>
        {organization.branches.map((branch, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  value={branch.name}
                  onChange={(e) => {
                    const newBranch = [...organization.branches];
                    newBranch[index] = { ...branch, name: e.target.value };
                    setOrganization({ ...organization, branches: newBranch });
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="California"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  HR
                </label>
                <input
                  type="text"
                  value={branch.hr}
                  onChange={(e) => {
                    const newBranch = [...organization.branches];
                    newBranch[index] = { ...branch, hr: e.target.value };
                    setOrganization({ ...organization, branches: newBranch });
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={branch.email}
                  onChange={(e) => {
                    const newBranch = [...organization.branches];
                    newBranch[index] = { ...branch, email: e.target.value };
                    setOrganization({ ...organization, branches: newBranch });
                  }}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="+1 234-567-8900"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setOrganization({
              ...organization,
              branches: [
                ...organization.branches,
                {
                  name: "",
                  hr: "",
                  email: "",
                },
              ],
            })
          }
          className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
        >
          ➕ Add Branch
        </button>
      </div>

      {/* Other Information */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <label className="block text-sm font-medium text-gray-600">
          📝 Other Information
        </label>
        <textarea
          value={organization.otherInformation}
          rows={4}
          onChange={(e) =>
            setOrganization({
              ...organization,
              otherInformation: e.target.value,
            })
          }
          onInput={(e) => {
            (e.target as HTMLTextAreaElement).style.height = "auto"; // Reset height to recalculate
            (e.target as HTMLTextAreaElement).style.height =
              (e.target as HTMLTextAreaElement).scrollHeight + "px";
          }}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 resize-none overflow-hidden"
          placeholder="Provide every necessary information about your organization that you want your bot to know."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition"
      >
        🚀 Submit
      </button>
    </form>
  );
}

export default KnowledgeBaseForm;
