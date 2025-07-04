import React, { useState, useEffect } from 'react';

const FinancialCalculator = () => {
  const [activeCategory, setActiveCategory] = useState('investment');
  const [activeCalculator, setActiveCalculator] = useState('sip');

  // SIP Calculator State
  const [sipData, setSipData] = useState({
    monthlyInvestment: 5000,
    investmentPeriod: 10,
    expectedReturn: 12,
    futureValue: 0,
    totalInvestment: 0,
    estimatedReturns: 0
  });

  // Income Tax Calculator State
  const [taxData, setTaxData] = useState({
    annualIncome: 800000,
    deductions: 150000,
    regime: 'new',
    taxLiability: 0
  });

  // ULIP Calculator State
  const [ulipData, setUlipData] = useState({
    annualPremium: 50000,
    policyTerm: 15,
    fundType: 'equity',
    charges: 1.5,
    maturityValue: 0
  });

  // NPS Calculator State
  const [npsData, setNpsData] = useState({
    monthlyContribution: 5000,
    currentAge: 30,
    retirementAge: 60,
    expectedReturn: 10,
    corpus: 0,
    annuity: 0
  });

  // Term Insurance Calculator State
  const [termInsuranceData, setTermInsuranceData] = useState({
    age: 30,
    coverageAmount: 10000000,
    policyTerm: 20,
    healthStatus: 'excellent',
    premium: 0
  });

  // Human Life Value Calculator State
  const [hlvData, setHlvData] = useState({
    currentAge: 30,
    retirementAge: 60,
    annualIncome: 1000000,
    existingCover: 5000000,
    liabilities: 2000000,
    assets: 3000000,
    hlv: 0
  });

  // Calculate SIP
  useEffect(() => {
    if (activeCalculator === 'sip') {
      const months = sipData.investmentPeriod * 12;
      const monthlyRate = sipData.expectedReturn / 100 / 12;
      const futureValue = sipData.monthlyInvestment * 
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
        (1 + monthlyRate);
      
      const totalInvestment = sipData.monthlyInvestment * months;
      const estimatedReturns = futureValue - totalInvestment;
      
      setSipData({
        ...sipData,
        futureValue: parseFloat(futureValue.toFixed(2)),
        totalInvestment: parseFloat(totalInvestment.toFixed(2)),
        estimatedReturns: parseFloat(estimatedReturns.toFixed(2))
      });
    }
  }, [sipData.monthlyInvestment, sipData.investmentPeriod, sipData.expectedReturn]);

  // Calculate Income Tax
  useEffect(() => {
    if (activeCalculator === 'tax') {
      let taxableIncome = taxData.annualIncome - taxData.deductions;
      let tax = 0;
      
      if (taxData.regime === 'new') {
        if (taxableIncome <= 700000) tax = 0;
        else if (taxableIncome <= 900000) tax = (taxableIncome - 700000) * 0.05;
        else if (taxableIncome <= 1200000) tax = 10000 + (taxableIncome - 900000) * 0.10;
        else if (taxableIncome <= 1500000) tax = 40000 + (taxableIncome - 1200000) * 0.15;
        else tax = 85000 + (taxableIncome - 1500000) * 0.30;
      } else {
        // Old regime calculation
        if (taxableIncome <= 250000) tax = 0;
        else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
        else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
        else tax = 112500 + (taxableIncome - 1000000) * 0.30;
      }
      
      setTaxData({...taxData, taxLiability: Math.round(tax)});
    }
  }, [taxData.annualIncome, taxData.deductions, taxData.regime]);

  // Calculate Human Life Value
  useEffect(() => {
    if (activeCalculator === 'hlv') {
      const incomeYears = hlvData.retirementAge - hlvData.currentAge;
      const hlv = (hlvData.annualIncome * incomeYears) + hlvData.liabilities - hlvData.assets - hlvData.existingCover;
      setHlvData({...hlvData, hlv: hlv > 0 ? hlv : 0});
    }
  }, [hlvData.currentAge, hlvData.retirementAge, hlvData.annualIncome, hlvData.existingCover, hlvData.liabilities, hlvData.assets]);

  // Calculate ULIP
  useEffect(() => {
    if (activeCalculator === 'ulip') {
      const annualReturn = fundReturn(ulipData.fundType);
      const netReturn = annualReturn - ulipData.charges;
      const maturityValue = ulipData.annualPremium * 
        ((Math.pow(1 + netReturn/100, ulipData.policyTerm) - 1) / (netReturn/100));
      setUlipData({...ulipData, maturityValue: parseFloat(maturityValue.toFixed(0))});
    }
  }, [ulipData.annualPremium, ulipData.policyTerm, ulipData.fundType, ulipData.charges]);

  // Calculate NPS
  useEffect(() => {
    if (activeCalculator === 'nps') {
      const contributionYears = npsData.retirementAge - npsData.currentAge;
      const months = contributionYears * 12;
      const monthlyRate = npsData.expectedReturn / 100 / 12;
      const corpus = npsData.monthlyContribution * 
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
        (1 + monthlyRate);
      const annuity = corpus * 0.4 * 0.06; // 40% annuity with 6% return
      setNpsData({...npsData, corpus: parseFloat(corpus.toFixed(0)), annuity: parseFloat(annuity.toFixed(0))});
    }
  }, [npsData.monthlyContribution, npsData.currentAge, npsData.retirementAge, npsData.expectedReturn]);

  // Calculate Term Insurance
  useEffect(() => {
    if (activeCalculator === 'term') {
      let basePremium = termInsuranceData.coverageAmount / 1000;
      let multiplier = 1;
      
      // Age factor
      if (termInsuranceData.age < 30) multiplier *= 0.8;
      else if (termInsuranceData.age < 40) multiplier *= 1;
      else if (termInsuranceData.age < 50) multiplier *= 1.5;
      else multiplier *= 2.5;
      
      // Health factor
      if (termInsuranceData.healthStatus === 'excellent') multiplier *= 0.9;
      else if (termInsuranceData.healthStatus === 'good') multiplier *= 1;
      else if (termInsuranceData.healthStatus === 'average') multiplier *= 1.2;
      else multiplier *= 1.8;
      
      const premium = basePremium * multiplier * (termInsuranceData.policyTerm / 10);
      setTermInsuranceData({...termInsuranceData, premium: Math.round(premium)});
    }
  }, [termInsuranceData.age, termInsuranceData.coverageAmount, termInsuranceData.policyTerm, termInsuranceData.healthStatus]);

  const fundReturn = (fundType) => {
    switch(fundType) {
      case 'equity': return 12;
      case 'balanced': return 10;
      case 'debt': return 8;
      default: return 10;
    }
  };

  const renderCalculator = () => {
    switch(activeCalculator) {
      case 'sip':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-700">SIP Calculator</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Monthly Investment (₹)</label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={sipData.monthlyInvestment}
                onChange={(e) => setSipData({...sipData, monthlyInvestment: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-right text-blue-600 font-medium">₹{sipData.monthlyInvestment.toLocaleString()}</div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Investment Period (Years)</label>
              <input
                type="range"
                min="1"
                max="30"
                value={sipData.investmentPeriod}
                onChange={(e) => setSipData({...sipData, investmentPeriod: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-right text-blue-600 font-medium">{sipData.investmentPeriod} years</div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Expected Annual Return (%)</label>
              <input
                type="range"
                min="1"
                max="30"
                value={sipData.expectedReturn}
                onChange={(e) => setSipData({...sipData, expectedReturn: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-right text-blue-600 font-medium">{sipData.expectedReturn}%</div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Future Value</div>
                  <div className="text-xl font-bold text-green-600">₹{sipData.futureValue.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Investment</div>
                  <div className="text-xl font-bold">₹{sipData.totalInvestment.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Estimated Returns</div>
                  <div className="text-xl font-bold text-green-600">₹{sipData.estimatedReturns.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'tax':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Income Tax Calculator</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Annual Income (₹)</label>
              <input
                type="range"
                min="500000"
                max="5000000"
                step="50000"
                value={taxData.annualIncome}
                onChange={(e) => setTaxData({...taxData, annualIncome: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-right text-blue-600 font-medium">₹{taxData.annualIncome.toLocaleString()}</div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Deductions (₹)</label>
              <input
                type="range"
                min="0"
                max="300000"
                step="10000"
                value={taxData.deductions}
                onChange={(e) => setTaxData({...taxData, deductions: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-right text-blue-600 font-medium">₹{taxData.deductions.toLocaleString()}</div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Tax Regime</label>
              <div className="flex space-x-4">
                <button 
                  className={`px-4 py-2 rounded-lg ${taxData.regime === 'new' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setTaxData({...taxData, regime: 'new'})}
                >
                  New Regime
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg ${taxData.regime === 'old' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setTaxData({...taxData, regime: 'old'})}
                >
                  Old Regime
                </button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="text-center">
                <div className="text-sm text-gray-600">Tax Liability</div>
                <div className="text-2xl font-bold text-red-600">₹{taxData.taxLiability.toLocaleString()}</div>
                <div className="mt-2 text-sm text-gray-600">Taxable Income: ₹{(taxData.annualIncome - taxData.deductions).toLocaleString()}</div>
              </div>
            </div>
          </div>
        );
      
      case 'hlv':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Human Life Value Calculator</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Current Age</label>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={hlvData.currentAge}
                  onChange={(e) => setHlvData({...hlvData, currentAge: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">{hlvData.currentAge} years</div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Retirement Age</label>
                <input
                  type="range"
                  min="55"
                  max="75"
                  value={hlvData.retirementAge}
                  onChange={(e) => setHlvData({...hlvData, retirementAge: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">{hlvData.retirementAge} years</div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Annual Income (₹)</label>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={hlvData.annualIncome}
                onChange={(e) => setHlvData({...hlvData, annualIncome: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-right text-blue-600 font-medium">₹{hlvData.annualIncome.toLocaleString()}</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Existing Cover (₹)</label>
                <input
                  type="number"
                  value={hlvData.existingCover}
                  onChange={(e) => setHlvData({...hlvData, existingCover: parseInt(e.target.value) || 0})}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Liabilities (₹)</label>
                <input
                  type="number"
                  value={hlvData.liabilities}
                  onChange={(e) => setHlvData({...hlvData, liabilities: parseInt(e.target.value) || 0})}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Assets (₹)</label>
                <input
                  type="number"
                  value={hlvData.assets}
                  onChange={(e) => setHlvData({...hlvData, assets: parseInt(e.target.value) || 0})}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="text-center">
                <div className="text-sm text-gray-600">Recommended Insurance Cover</div>
                <div className="text-2xl font-bold text-green-600">₹{hlvData.hlv.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
              </div>
            </div>
          </div>
        );
      
      case 'ulip':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-700">ULIP Calculator</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Annual Premium (₹)</label>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={ulipData.annualPremium}
                onChange={(e) => setUlipData({...ulipData, annualPremium: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-right text-blue-600 font-medium">₹{ulipData.annualPremium.toLocaleString()}</div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Policy Term (Years)</label>
              <input
                type="range"
                min="5"
                max="30"
                value={ulipData.policyTerm}
                onChange={(e) => setUlipData({...ulipData, policyTerm: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="text-right text-blue-600 font-medium">{ulipData.policyTerm} years</div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Fund Type</label>
              <div className="flex space-x-2">
                {['equity', 'balanced', 'debt'].map(type => (
                  <button
                    key={type}
                    className={`px-3 py-2 rounded-lg text-sm capitalize ${ulipData.fundType === type ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setUlipData({...ulipData, fundType: type})}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="text-center">
                <div className="text-sm text-gray-600">Estimated Maturity Value</div>
                <div className="text-2xl font-bold text-green-600">₹{ulipData.maturityValue.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                <div className="mt-2 text-sm text-gray-600">Expected Return: {fundReturn(ulipData.fundType)}%</div>
              </div>
            </div>
          </div>
        );
      
      case 'nps':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-700">NPS Calculator</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Current Age</label>
                <input
                  type="range"
                  min="18"
                  max="55"
                  value={npsData.currentAge}
                  onChange={(e) => setNpsData({...npsData, currentAge: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">{npsData.currentAge} years</div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Retirement Age</label>
                <input
                  type="range"
                  min="60"
                  max="70"
                  value={npsData.retirementAge}
                  onChange={(e) => setNpsData({...npsData, retirementAge: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">{npsData.retirementAge} years</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Monthly Contribution (₹)</label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={npsData.monthlyContribution}
                  onChange={(e) => setNpsData({...npsData, monthlyContribution: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">₹{npsData.monthlyContribution.toLocaleString()}</div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Expected Return (%)</label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  value={npsData.expectedReturn}
                  onChange={(e) => setNpsData({...npsData, expectedReturn: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">{npsData.expectedReturn}%</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Retirement Corpus</div>
                  <div className="text-xl font-bold text-green-600">₹{npsData.corpus.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Estimated Annuity</div>
                  <div className="text-xl font-bold text-green-600">₹{npsData.annuity.toLocaleString('en-IN', {maximumFractionDigits: 0})}/year</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'term':
        return (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Term Insurance Calculator</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Age</label>
                <input
                  type="range"
                  min="18"
                  max="60"
                  value={termInsuranceData.age}
                  onChange={(e) => setTermInsuranceData({...termInsuranceData, age: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">{termInsuranceData.age} years</div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Coverage Amount (₹)</label>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="1000000"
                  value={termInsuranceData.coverageAmount}
                  onChange={(e) => setTermInsuranceData({...termInsuranceData, coverageAmount: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">₹{termInsuranceData.coverageAmount.toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Policy Term (Years)</label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={termInsuranceData.policyTerm}
                  onChange={(e) => setTermInsuranceData({...termInsuranceData, policyTerm: parseInt(e.target.value)})}
                  className="w-full"
                />
                <div className="text-right text-blue-600 font-medium">{termInsuranceData.policyTerm} years</div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Health Status</label>
                <select
                  value={termInsuranceData.healthStatus}
                  onChange={(e) => setTermInsuranceData({...termInsuranceData, healthStatus: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="average">Average</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="text-center">
                <div className="text-sm text-gray-600">Estimated Annual Premium</div>
                <div className="text-2xl font-bold text-green-600">₹{termInsuranceData.premium.toLocaleString()}</div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Select a calculator</div>;
    }
  };

  const investmentCalculators = [
    { id: 'sip', name: 'SIP Calculator' },
    { id: 'tax', name: 'Income Tax Calculator' },
    { id: 'ulip', name: 'ULIP Calculator' },
    { id: 'nps', name: 'NPS Calculator' }
  ];

  const insuranceCalculators = [
    { id: 'term', name: 'Term Insurance' },
    { id: 'hlv', name: 'Human Life Value' },
    { id: 'life', name: 'Life Insurance' },
    { id: 'nri', name: 'NRI Term Insurance' },
    { id: 'policy', name: 'Policy Premium' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Financial Calculators Suite</h1>
        <p className="text-gray-600">Plan your finances with our comprehensive calculator tools</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3 text-gray-800">Categories</h2>
              <div className="space-y-2">
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg ${activeCategory === 'investment' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    setActiveCategory('investment');
                    setActiveCalculator('sip');
                  }}
                >
                  Investment Calculators
                </button>
                <button
                  className={`w-full text-left px-3 py-2 rounded-lg ${activeCategory === 'insurance' ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => {
                    setActiveCategory('insurance');
                    setActiveCalculator('term');
                  }}
                >
                  Insurance Calculators
                </button>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-bold mb-3 text-gray-800">
                {activeCategory === 'investment' ? 'Investment Tools' : 'Insurance Tools'}
              </h2>
              <div className="space-y-2">
                {(activeCategory === 'investment' ? investmentCalculators : insuranceCalculators).map(calc => (
                  <button
                    key={calc.id}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm ${activeCalculator === calc.id ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveCalculator(calc.id)}
                  >
                    {calc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <h3 className="font-bold text-blue-700 mb-2">Financial Tips</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Start SIP investments early for compounding benefits</li>
              <li>• Review your insurance coverage annually</li>
              <li>• Maximize tax-saving investments under Section 80C</li>
              <li>• Consider health insurance for comprehensive coverage</li>
            </ul>
          </div>
        </div>
        
        {/* Main Calculator Area */}
        <div className="flex-1">
          {renderCalculator()}
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-5 text-white">
              <h3 className="font-bold text-lg mb-2">Investment Planning</h3>
              <p className="text-sm opacity-90">Plan your investments for long-term wealth creation with our expert tools</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-5 text-white">
              <h3 className="font-bold text-lg mb-2">Insurance Protection</h3>
              <p className="text-sm opacity-90">Secure your family's future with adequate insurance coverage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialCalculator;